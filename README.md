## API rest Trips 

Para la creacion del API Rest de los trips de Mi aguila construi un una peticion GET para las siguientes consultas:

    a. Consultar la cantidad de viajes totales.

    b. Consultar la cantidad de viajes totales por ciudad.

    c. Consultar la cantidad de viajes totales por país.

    d. Consultar los viajes actuales:

        Para la extraccion de los viajes en la peticion get: 
        
        https://cryptic-everglades-11046.herokuapp.com/trips
         
        ,diseñe una estrtegia de paginacion:
        
        https://cryptic-everglades-11046.herokuapp.com/trips?desde=0&hasta=30   
        

Para crear un viaje realice una peticion POST, con formato x-www-form-urlencoded para los parametros de entrada.

Para actualizar un viaje realice una peticion PUT, con formato x-www-form-urlencoded para los registros a actializar.


La documentacion en swagger de la API : 
```
https://app.swaggerhub.com/apis/oscarjvc3/trips_RestServer/1.0.0-oas3
```

Recuerden instalar los paquetes de node asi

```
npm install

```
Para subir el servidor
```
node server/server
```
La base de datos mongoDB esta colgada a un servicio en la nube (mongoDB - Atlas).

Como adicional al ejercicio, colgue el API en un servicio de HEROKU:

```
https://cryptic-everglades-11046.herokuapp.com/ 
```



La solucion del ejercicio de https://www.hackerrank.com/challenges/sherlock-and-anagrams/problem es :
```
int sherlockAndAnagrams(string s) {
    int cont = 0;
    string temp,temp_;
    bool inq = true,cnc,flag;
    for(int cant = 1; cant < s.length()  ; cant ++){
        for(int cur = 0; cur < s.length() - cant; cur++ ){
            temp = s.substr(cur,cant);
            for(int pos = cur + 1; pos <= s.length() - cant; pos ++){
                temp_ = s.substr(pos,cant);
                        for(int cmp = 0 ; cmp < temp.length() ; cmp ++){
                            for(int cmp_ = 0 ; cmp_ < temp_.length() ; cmp_ ++){
                                if(temp[cmp] == temp_[cmp_]){
                                    inq = true;
                                    temp_[cmp_] = '_';
                                    break;
                                }else{
                                    inq = false;
                                    continue;
                                }
                            }
                            if(inq == false)break;
                        }
                    if(inq == true){
                            cont = cont + 1;
                    }
            }
        }
    }
return cont;
} 
```

Para el tercer punto, cree el modulo ejercicio_2.js
```
node ejercicio_2.js
```





