# Desafio Implementación de un Middleware en entorno Javascript
## Daniel_Rojas

### Instalacion de PNPM
Para iniciar el proyecto se debe instalar pnpm

En powershell 
```bash
 $env:PNPM_VERSION = "10.0.0"; Invoke-WebRequest https://get.pnpm.io/install.ps1 -UseBasicParsing | Invoke-Expression
```
o con npm 
```bash
npm install -g pnpm@latest-10
```

### Paquetes instalados
Para producción

```bash
pnpm i express cookie-parser morgan
```

Para desarrollo
```bash
pnpm i --save-dev  tsx
pnpm i --save-dev   @types/express @types/node @types/morgan @types/cookie-parser

```
Para ejecutar 

```bash
pnpm run dev
```



Metodo Get Token
```bash
http://localhost:3000/
```
![Get Users](./img/1.png)

con error

![Get Users](./img/2%20con%20error.png)


con error forzado

![Get Users](./img/3%20error%20forzado.png)

Prueba de la lista


![Get Users](./img/4%20post%20prueb1.png)


![Get Users](./img/5.png)

![Get Users](./img/6.png)

![Get Users](./img/7.png)

![Get Users](./img/8.png)



