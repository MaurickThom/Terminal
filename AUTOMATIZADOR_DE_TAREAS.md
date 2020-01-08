````sh

    > ./platzi.sh
    > chmod u+x platzi.sh

````

Para ver las variables

````sh

    > vim /etc/environment
````

Si quiero agregar alguna variable de entorno

````sh
    > vim .bashrc
    # y adentro le colocamos
    # export PATH=$PATH:/home/sony/THOM
    # luego guardamos y salimos
    > source .bashrc

````

## **Programación de tareas**

- at
  - `at now +2 minutes`
  - `at> echo "hello world" > /home/sony/hola.txt`
- cron : programar comandos para que se ejecuten de forma periodica, utiliza una tabla de archivos que es crontab
  - `crontab -e` : permitira editar , ver las tareas programadas y crear nuevas tareas
