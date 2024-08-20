
# Resolucion de conflicto en Git

## 1. Resolucion usando Linea de Comandos

 Cuando se desea resolver un archivo mediante linea de comandos, se puede usar los comandos:

Para traer los cambios incoming y omitir nuestros cambios locales usamos el siguiente comando:

    git checkout --theirs

Para traer los cambios actuales y omitir los cambios entrantes, usamos el siguiente comando:

    git checkout --ours 

En caso que se necesite agregar y omitir ciertas lineas,  se debe de tener en cuenta la nomenclatura de un conflicto de linea en git

    <<<<<<< HEAD
    Este es el contenido en la rama principal.
    =======
    Este es el contenido en la rama feature.
    >>>>>>> feature


Una vez se han resuelto todos los conflictos procedemos a agregar nuestros cambios al stagging area

    git add .

Posteriormente procedemos a realizar el commit con un mensaje personalizado

O simplemente continuamos con nuestro proceso de merge

    git merge --continue

  

## 2. Resolucion usando Visual Studio Code

  
  Existen herramientas virtuales la cual permiten resolver conflictos usando una GUI, en este caso, se puede usar herramientas standallone tales como git kraken o Visual Studio code
  
![enter image description here](https://i.imgur.com/wPXsAnL.png)
  
  En este caso, podemos aceptar el cambio current, comparando o incoming usando el editor de conflictos de visual studio code