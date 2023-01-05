import express from 'express' //importer express sur le serveur
const app = express()
const port = 3003 //choisir le port où écouter

'use strict'
/** Écrit un point de données à InfluxDB en utilisant la bibliothèque client Javascript avec Node.js. **/

import { InfluxDB, Point } from '@influxdata/influxdb-client'

/** Variables d'environnements **/
const url = "http://localhost:8086"
const token = "jxyyP8sXfg2DaBxLXHR8VUWGS2lbZipqcK9UbpV9F_xckIPFrAhrCz12kYWMPWroifL4V7UPgRjNhClCxJ-X9g=="
const org = "0753b1e8b6c45834"
const bucket = "c2a4ac8af3c345e6"

/** Instantie le client InfluxDB avec une configuration objet **/
const influxDB = new InfluxDB({ url, token })

/** Créer un client en écriture à partir de la méthode getWriteApi. Fournissez votre « org » et votre « bucket ».**/
const writeApi = influxDB.getWriteApi(org, bucket)

/** Appliquer les tags par défaut **/
writeApi.useDefaultTags({ region: 'west' })

/** Lorsqu’une requête est faite à ce endpoint, ce gestionnaire de route sera exécuté.
Dans ce gestionnaire de route, le corps de requête est lu en morceaux, 
puis assemblé en une seule chaîne appelée data lorsque l’événement final est émis. 
La chaîne de données est ensuite analysée dans un objet JavaScript en utilisant JSON.parse.
Ensuite, certaines valeurs sont extraites de l’objet de données, 
puis un nouvel objet Point est créé avec ces valeurs. 
L’objet Point est alors écrit dans InfluxDB en utilisant l’objet writeApi. 
Enfin, la méthode flush est appelée pour rincer les écritures tamponnées dans la base de données.  **/

app.post('/api/temperature', (req, res) => {
    let data = "";
    req.on('data', (chunk) => {
        data += chunk;
      });
      req.on('end', () => {
          const frame = JSON.parse(data);
          const code = parseInt("0x" + frame.data.substr(0,2))/10;
          const value = parseInt("0x0" + frame.data.substr(2, 4))/10;
          let alert = "";
          if (frame.data.length > 6) {
              alert = parseInt("0x" + frame.data.substr(6, 4))
          };
          const point1 = new Point('temperature')
            .tag('sensor_id', 'TLM01')
            .floatField('temperature', value)
            .intField('code', code)
            writeApi.writePoint(point1)
            writeApi.flush().then(function () {
                console.log("Write Finished");
              })
      });
})

/** Lorsqu’une requête est faite à ce endpoint, ce gestionnaire de route sera exécuté.
Dans ce gestionnaire de route, le corps de requête est lu en morceaux, 
puis assemblé en une seule chaîne appelée data lorsque l’événement final est émis. 
La chaîne de données est ensuite analysée dans un objet JavaScript en utilisant JSON.parse.
Ensuite, certaines valeurs sont extraites de l’objet de données, 
puis un nouvel objet Point est créé avec ces valeurs. 
L’objet Point est alors écrit dans InfluxDB en utilisant l’objet writeApi. 
Enfin, la méthode flush est appelée pour rincer les écritures tamponnées dans la base de données.  **/

app.post('/api/humidity', (req, res) => {
    let data = "";
    req.on('data', (chunk) => {
        data += chunk;
      });
      req.on('end', () => {
          const frame = JSON.parse(data);
          const code = parseInt("0x" + frame.data.substr(0,2))/10;
          const value = parseInt("0x0" + frame.data.substr(2, 4))/10;
          let alert = "";
          if (frame.data.length > 6) {
              alert = parseInt("0x" + frame.data.substr(6, 4))
          };
          const point1 = new Point('humidity')
          .tag('sensor_id', 'TLM01')
          .floatField('humidity', value)
          .intField('code', code)
          writeApi.writePoint(point1)
          writeApi.flush().then(function () {
            console.log("Write Finished");
          })
      });
})

/**
 * app.listen(port, callback) est une méthode de l’objet app dans une application Express qui dit 
 * à l’application d’écouter les requêtes entrantes sur le port spécifié. 
 * Lorsque l’application commence à écouter, la fonction de callback est exécutée.
 */

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})