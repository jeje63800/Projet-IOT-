# Projet-IOT-
> DEFOUR Jérôme - PIAT Benjamin



Hello
- Télécharger le dossier "IOT main"
- Installer node js 
> (https://nodejs.org/en/)
- Créer un dossier 'projet' où mettre le dossier IOT Main
- Créer dans projet un autre dossier MiddleWare 

-   Dans un editeur (VS code par exemple) 
- Ouvrir le dossier projet
- Ouvrir un terminal dans le dossier MidlleWare
- faire : 
> npm init 

(accepter tout par défaut avec entrer pour creer le package .json)

> npm install express --save

(pour installer express et sauvegarder)

-   Créer dans le dossier un fichier  ‘app.js ‘

- le remplir avec #template API 
  
  ![image](https://user-images.githubusercontent.com/81513016/210803218-0c7a5fd3-58d9-494c-90bb-32737fec9d1e.png)

-	Remplacer le port par un port choisi au-dessus de 1024 (ici  3003)

-	A la place du ‘app.get’ mettre ‘app.post’ (ligne 5)
 
-	Insérer ces lignes de code :

```app.post('/api/temperature', (req, res) => {
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
```
-	Retourner dans le terminal à l’intérieur du dossier MiddleWare
-	Exécuter les commandes suivantes : 
>	npm i -g typescript && npm i --save-dev @types/node  

#installe Type script
	
>	tsc –-init  
	
#Crée la configuration par défaut 

>	npm install --save @influxdata/influxdb-client  
	
#?
	
>	npm install --save @influxdata/influxdb-client-apis  
	
#?
	
-	Retourner dans ‘app.js’
-	Remplacer la première ligne du fichier par :
  
```
import express from ‘express’ 
```
-	insérer en dessous des 3 premières lignes : 

```
'use strict'

import { InfluxDB, Point } from '@influxdata/influxdb-client'

const url = "http://localhost:8086"
const token = "jxyyP8sXfg2DaBxLXHR8VUWGS2lbZipqcK9UbpV9F_xckIPFrAhrCz12kYWMPWroifL4V7UPgRjNhClCxJ-X9g=="
const org = "0753b1e8b6c45834"
const bucket = "c2a4ac8af3c345e6"

const influxDB = new InfluxDB({ url, token })

const writeApi = influxDB.getWriteApi(org, bucket)

writeApi.useDefaultTags({ region: 'west' }) 
```

-	Télécharger InfluxDb
>https://dl.influxdata.com/influxdb/releases/influxdb2-2.5.1-windows-amd64.zip
-	Extraire et lancer InfluxDb.exe en cmd
-	Aller sur un navigateur et rechercher ‘**localhost:8086**’
-	Aller dans l'icône de la flèche et cliquer sur ‘Buckets’

 ![image](https://user-images.githubusercontent.com/81513016/210803526-ef19511e-c483-4536-8d82-170a65180801.png)

-	Créer un Bucket
-	Aller dans l'icône de la fleche et cliquer sur ‘Token’
-	Générer un Token avec seulement le Bucket crée auparavant en lecture et copier le token dans un fichier (il disparait)

 ![image](https://user-images.githubusercontent.com/81513016/210803583-9a488cb9-a37d-4cfa-8312-90f2432c9cd1.png)

-	Créer un deuxième token avec tous les droits et copier le dans un fichier (il disparait)
-	Aller dans bucket et copier l’id de celui que vous avez créer et mettez le à la ligne de code :
```
const bucket = "c2a4ac8af3c345e6"
```
-	Prendre cette partie de l’url  

![image](https://user-images.githubusercontent.com/98834517/210812958-de899e70-dc33-4782-b32d-e9891c3a8ca2.png)

-	Le mettre dans la ligne de code suivante :
```
const org = "0753b1e8b6c45834"
```

-	Installer grafana 
>https://grafana.com/grafana/download?platform=windows
-	Aller sur un navigateur et se rendre sur ‘**localhost:3000**’ 

-	Aller dans le menu ‘configuration’ (roulette) et dans l’onglet ‘Data source’ 

![image](https://user-images.githubusercontent.com/98834517/210813388-d984ddb7-8fa5-4d55-852d-877df4f1839b.png)

-	Remplissez les données en personnalisant pour vous les champs personnels
 	 
![image](https://user-images.githubusercontent.com/81513016/210804537-8acf5f83-328d-4b33-aac6-b47df62991b6.png)

![image](https://user-images.githubusercontent.com/81513016/210804576-6e8abda2-ee22-4cf3-b983-052942c91cbe.png)


-	Ouvrir un terminal dans MiddleWare et executer

>	npm i

-	Ouvrir un terminal dans Tp Iot

>	npm i 

-	Aller dans température.js
 
-	Remplacer le port 8000 avec celui que vous avez choisi dans app.js (ligne3) :
``` 
const ENDPOINT = 'http://localhost:8000/api/temperature'; 
```

-	Dans le fichier package.json de Middleware  après la ligne : 
```
"main": "index.js",
```
Ajouter :
```
"type": "module",
```

-	Ouvrir un terminal sur MiddleWare et exécuter :

>	node ./app.js

-	Ouvrir un terminal dans le Tp Iot et exécuter :

>	npm run sensors

-	Aller sur la page de Grafana : 

-	Se rendre sur «DashBoard »
-	Faire « new DashBoard »
-	Sélectionner la bonne data source 
	
![image](https://user-images.githubusercontent.com/81513016/210804835-9df08b84-f64b-4464-b154-684aea631e4b.png)

-	Mettre ces ligne de code à la suite :
```
from(bucket: " TP IOT ")
  |> range(start: -1h)
  |> filter(fn: (r) =>
    r._measurement == "humidity" and
    r._field == "humidity"
  )
```
 
 ![image](https://user-images.githubusercontent.com/98834517/210806256-812f6152-a3fd-41c8-9a02-593c00ecdbf0.png)


-	Ajouter un autre dashboard  , resélectionné la bonne data source et metter

```
from(bucket: " TP IOT ")
  |> range(start: -1h)
  |> filter(fn: (r) =>
    r._measurement == "temperature" and
    r._field == "temperature "
  )
```
![image](https://user-images.githubusercontent.com/98834517/210807061-fd4a25f4-1443-44a0-b682-eff3a312758d.png)


