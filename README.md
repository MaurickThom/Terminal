# **Curso Introducción a la terminal y linea de comandos - Platzi**

### **¿Qué es la terminal?**

Toda computadora tiene una memoria donde se alamacenaran instrucciones y algunos datos, lo que hara el compurador
es revisar el espacio de memoria -> levantar una instruccion -> ejecutarla y mandar los resusltados al cliente
(entiendase cliente como el usuario que necesita del recurso).
Es un automatizador de tareas muy repetitivas que se pueden programar.

## **Comandos**

```sh
 > date # mostrará la fecha del sistema
 > echo "hello world" # mostrar mensaje en la pantalla
 # > man # mostrará información sobre otros comandos
 > man date
```

## **Organización de información**

- texmf
  - doc
  - fonts
  - source
  - tex
    - generic
    - latex
    - plain
  - texdoc

## **Tips**

- Para crear un archivo vacio y luego rellenarlo `touch .gitignore && echo "node_modules/" >> .gitignore`
- Archivos ocultos `ls -a`
- Para redirigirnos al ultimo directorio visitado `cd -`
- Para redirigirnos al usuario `cd ~` en Ubuntu el simbolo se hace 'AltGr' + '+'
- cp archivo destino/
- mv archivo destino/
- `rmdir directorio/` es usado para eliminar directorios vacios

**Archivos Virtuales . y ..**

Son punteros a otros directorios donde el . es el directorio actual y el .. es el directorio padre

- Listar
  - `ls` lista los archivos que se encuentran en el directorio sobre el que se este trabajando
  - `ls -a` lista todos los archivos incluyendo los ocultos
  - `ls -t` ordena los archivos por fecha de modificacion
  - `ls -X` ordena los archivos por extensión de fichero
  - `ls -l` muestra la información : usuario, grupo, tamaño, fecha y hora de creación.
  - `ls -r` para revertir el orden
  - `ls -h` muestra las unidades de tamaño KB y MB
  - `ls -R` muestra el contenido de todos los subdirectorios de forma recursiva
  - `ls -S` ordena los resultados por tamaño de archivo
  - `ls -F` agrega a cada nombre de directorio un / y tras cada nombre de ejecutable un /*
  - combinaciones de opciones `ls  -lhSr *.json` lo que hara es listar mostrando toda la informacion<br>
    y ademas el tamaño del archivo y lo ordena por los mismo de forma revertida siempre y cuando terminen en .json
- Batch
  - `cat texto.txt` muestra el contenido
  - `head texto.txt` muestra solo las primeras lineas del archivo , `-n 5` y con esto le decimos cuales serán las primeras lineas
  - `tail texto.txt` hace lo inverso del anterior
- Batch Avanzadas
  - grep : Busqueda por expresiones regulares `grep expresion archivo` `-i` ignore case `grep -i expresion archivo`
  - sed (stream editor) : Tratamiento de flujo de caracteres
    - `sed 's/thom/maurick/g archivo` lo que hará es reemplazar thom -> maurick de forma global en todo el archivo
    pero no modificará el archivo solo lo reemplazará en el momento de mostrar
    - `sed '$d' archivo` lo que hara es eliminar la ultima linea creando otro Stream pero no modificara el actual
    - awk tratamiendo de texto delimitado, sirve muy bien para trabajar con textos estructurados como por ejemplo<br>
    los archivos separados por comas(cvs) o por tabs `awk -F ';' '{ print $1 }' archivo` ese -F dira el delimitador que en este caso es ';'
    luego se le dice que imprima la primera columna del archivo<br>
    `awk -F ';' 'NR > 1 && $3 > 0 { print $1 , $3 * $4 }'` NR : number row , lo que dice este script es que me imprima la columna 1 y el
    producto de la columna 3 y 4 siempre y cuando el numero de lineas sea mayor que 1 y los valores de la columna tres sea mayor que cero

## **Comunicación entre procesos : Qué son y cómo se utilizan los flujos estándar**

- Operadores importantes
  - | pipe
    - comando_1 | comando_2 : Manda el STDOUT del comando 1 al STDIN de comando_2
    - `cat dump.sql | wc -l`
  - >
    - comando_1 > archivo : Manda el STDOUT del comando_1 al inicio del archivo. Si el archivo no existe lo crea y si existe lo sobreescribe
  - >>
    - comando_1 >> archivo : Es igual al anterior con la diferencia que este concatena no sobreescribe
  - <
    - comando_1 < archivo : Manda el contenido del archivo como STDIN al comando
    - ejmplos : imaginemos que tengo un script sql dump.sql con el codigo de la creacion de una tabla o una base de datos
    o un backup cualquiera , entonces el problema es el poder ejecutar este script en mi base de datos o reestaurar el backup
    asi que de forma automatica lo podria hacer recurriendo al siguiente comando `conexion a la base de datos < dump.sql`
    `mysql -h 127.0.0.1 -u root -pcontra < dump.sql` en mi caso como uso docker primero levanto mi instancia y luego hago lo mismo que antes

Cuando ejecutamos un comando lo que se hace es lanzar un proceso nuevo, hay ocuaciones en las que no podemos hacer nada hasta que el proceso
termine de ejecutarse a eso se le conoce como ejecucion en primer plano, para tener otra alternativa a este caso es usar el operador '&'

`mysql -h 127.0.0.1 -u root -p123 < dump.sl &` imaginemos que el dump tiene millones de lineas de codigo entonces sin el `&` tendria que esperar
hasta tener devuelta el control y con el & podemos enviar el proceso al background y continuar con mis tareas

Ahora otro caso es en el que el proceso en brackground este ejecutandose constantemente por ejemplo la ejecucion de un servidor a estos procesos
se les conoce como demons del sistema operativo

Se puede mandar el proceso al background con `CTRL + Z` (en ubuntu) y para traerlo al foreground (primer plano) con `fg`

## **Herramientas para ver los procesos del background**

- ps : los procesos que ejecuto el usuario en mi caso sony
  - ps ax : procesos del sistema
  - ps ax | grep init : este comando mostrara todos los procesos que contenga como nombre init
- top : muestra en tiempo real como los procesos van cambiando
- jobs : lista los procesos que nosotros hemos enviado al background con un indice que podremos utilizar despues
  en fg o kill , para indicar sobre a cual aplicarlo se utiliza el operador '%' . `kill -%indice 9` -> `kill -2 -9`
- kill : funciona enviando señales a los procesos para que se detengan
  - kill -9 id : -9 es el tipo de señal que le dice que tiene que acabar de una ves
- killall : hace lo mismo que el anterior pero en este caso no se le pasa el id sino el nombre del ejecutable

## **Permisos sobre archivos: El sistema de permisos octal**

Unix es un sistema multiusuario, todos los archivos de unix tienen un dueño asociado (persona que creo el archivo),un grupo de usuarios que pueden acceder.


`ls -l` en la primera columna se obtendra como un hash con simbolos que tiene un significado

- `-` Archivo regular, permiso negado
- `d` directorio
- `b` archivo especial como dispositivo de bloque
- `c` archivo de caracter especial
- `l` enlace simbólico
- `p` tubería nombrada (FIFO)
- `s` zócalo de dominio (socket)

> Permisos son una matriz  de  : dueño,grupo,otros X lectura,escritura,ejecucion<br>
> los tres primeros son de dueño , grupo , otros

Valor | Permiso | descripcion
-- | -- | --
0 | `---` | sin permisos
1 | `--x` | Sólo ejecución de archivos o acceso a directorios
2 | `-w-` | Solo escritura
3 | `-wx` | Escritura y ejecución de archivos o acceso a directorios
4 | `r--` | solo lectura
5 | `r-x` | lectura y ejecución de archivos o acceso a directorios
6 | `rw-` | lectura y escritura
7 | `rwx` | lectura , escritura y ejecucion de archivos o acceso a directorios

Para alterar los permisos asociados

- `chmod`
- `chown`
- `chgrp`

## **Recursos**

- [sed](https://likegeeks.com/es/sed-de-linux/)