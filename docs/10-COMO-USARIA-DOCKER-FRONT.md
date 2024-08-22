# Docker en Soluciones front


Docker es demasiado importante en un desarrollo o de un despliegue front, ya que este permite la consistencia, Como anecdota, en un trabajo pasado se tenia un error en produccion al compilar los assets y el problema era que los assets se compilaban localmente mediante un agente de pipeline, y la version de NodeJS de este estaba desactualizada, lo que implico refactorizar los instrumentos de despliegue y se instalo docker
  

Un ejemplo de un Dockerfile para un entorno de desarrollo seria el siguiente

	# Usamos la version alpine de la imagen de nodejs
	FROM node:16-alpine

	# Directorio de trabajo
	WORKDIR /app

	# Copiamos el package.json y package-lock.json
	COPY package*.json ./

	# Se instalan las dependencias,
	RUN npm ci

	# Copiamos el resto del código de la aplicación
	COPY . .

	# Exponemos el puerto en el que se ejecutará la aplicación (ejemplo: React en el puerto 3000)
	EXPOSE 3000

	# Comando para iniciar la aplicación en modo desarrollo
	CMD ["npm", "start"]

Para un entorno de produccion no se recomienda usar el servidor embebido de angular o de los proyectos react, en este caso para un proyecto que puede ir a prod, se puede usar un servidor web tales como apache o como nginx, que nos funcionara como servidor de archivos para los assets que genera nuestra aplicacion


    RUN npm run build:prod
    
    FROM nginx:alpine
    
    COPY --from=build /app/build /usr/share/nginx/html
    
    EXPOSE 80
    
    CMD ["nginx", "-g", "daemon off;"]
