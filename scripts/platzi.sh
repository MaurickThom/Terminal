#!/bin/bash

NEW_DIR=platzi

if [ ! -d  "/root/$NEW_DIR" ]; then # -d nos dirá si el directorio EXISTE
    mkdir /root/$NEW_DIR
fi

cp backup_code.sh /root/$NEW_DIR/
echo "`date` : Todo listo"