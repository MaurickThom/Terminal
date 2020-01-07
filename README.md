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
  - combinaciones de opciones `ls  -lhSr *.json` lo que hara es listar mostrando toda la informacion 
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
    - Awk tratamiendo de texto delimitado