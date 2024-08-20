

# Refactorizacion de software

 
## 1. Refactorizacion de Bloque de codigo Callbacks versus promesas

En este bloque de codigo se esta usando la estrategia de callbacks para implementar una solucion para obtener datos

    function fetchData(callback) {
      setTimeout(() => {
        const data = { id: 1, name: "Smart Talent" };
        callback(null, data);
      }, 1000);
    }
    
    function processData(callback) {
      fetchData((error, data) => {
        if (error) {
          callback(error);
          return;
        }
        const processedData = { ...data, processed: true };
        callback(null, processedData);
      });
    }
    
    function displayData() {
      processData((error, data) => {
        if (error) {
          console.error("Smart Talent Error processing data:", error);
          return;
        }
        console.log("Smart Talent Processed Data:", data);
      });
    }
    
    displayData();


## 1. Solucion de Bloque de codigo Usando Promesas con Async and await

En este bloque de codigo se soluciona la estrategia de callback hell usando async y await:

    function fetchData() {
      return new Promise((resolve) => {
        setTimeout(() => {
          const data = { id: 1, name: "Smart Talent" };
          resolve(data);
        }, 1000);
      });
    }
    
    async function processData() {
      const data = await fetchData();
      const processedData = { ...data, processed: true };
      return processedData;
    }
    
    async function displayData() {
      try {
        const data = await processData();
        console.log("Smart Talent Processed Data:", data);
      } catch (error) {
        console.error("Smart Talent Error processing data:", error);
      }
    }
    
    displayData();
