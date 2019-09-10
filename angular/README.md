# aprendiendo-angular

## Prerequisitos:
NodeJS

Mas documentación: https://cli.angular.io/

## Actualizar angular cgi:
npm uninstall -g @angular/cli
npm cache verify
npm cache clear --force
npm install -g @angular/cli

## Crear proyecto Angular:
ng new APP_NAME

### Responder en asistente:
? Would you like to add Angular routing? No
? Which stylesheet format would you like to use? CSS

## Ejecutar aplicación:
cd APP_NAME
ng serve

## Crear modulos
ng generate component COMPONENT_NAME

## Directiva Estructurales
Funcionalidad en vistas o plantillas:
- *ngIF: Condicional en vista
- *ngFor: Recorrer arreglos
- [ATRIBUTE]: ajustar atributo html, css, ejemplo: [style.background]
- [ngSwitch] y *ngSwitchCase: Condicional switch
- [(ngModel)]: Para trabajar con formularios
- (click): Evento clic botones
- [class.CLASSNAME]: directiva para manejo de class
- [ngClass]: directiva para manejo de class
- [routerLink]: manejo de rutas en enlaces (a)
- [routerLinkActive]: aplicar estilo a enlace activo (a)
- ng-template #NOMBRE_VARIABLE: Para else en if
- #FORM_NAME="ngForm": Indicar formulario es de angular
- (ngSubmit): Evento submit formulario
- #FIELD_NAME="ngModel": Indicar campo es de angular

## Routing
- Debe existir en index.html, la siguiente directiva: <base href="/">
- Crear app/app.routing. Ver comentarios ahi.

## Servicios:
Clases para abstraer logica de aplicación. Interactuan con servicios rest, entre otros.

## Pipes:
Funciones usables a traves del codigo.

## Ajustar error rxjs/Observable
Instalar siguiente dependencia: npm install --save rxjs-compat

## Actualizar proyecto a nueva version de Angular
npm install @angular/cli@latest
ng update @angular/cli

***************************************

# MongoDB:

## Instalación:
https://linuxconfig.org/how-to-install-mongodb-on-redhat-8

http://www.grupotelfor.com/blog/7-centos-7/13-linux-how-to-open-a-port-on-rhel-centos-7-firewalld

***************************************
