    console.log('Primer Llamado...')
    const secondResponse = await fetchData({method:'GET',url:`${API}${firstResponse.results[0].id}`})
    console.log('Segundo Llamado...')
    const thirdResponse = await fetchData({method:'GET',url:`${secondResponse.origin.url}`})
    console.log('Tercero Llamado...')
    console.log(`Personajes: ${firstResponse.info.count}`);
    console.log(`Primer Personaje: ${secondResponse.name}`);
    console.log(`Dimensión: ${thirdResponse.dimension}`);
  }catch(err){
    console.log(err);
  }
})()



// fetchData(API, (error1, data1)=> {
  
//   if (error1) return console.error(`Error${error1}`);
//   console.log('Primer Llamado...')
  
//   fetchData(`${API}${data1.results[0].id}`, (error2, data2)=>{
//     if (error2) return console.error(error1);
//     console.log('Segundo Llamado...')

//     fetchData(data2.origin.url, (error3, data3)=> {
//       if (error3) return console.error(error3);
//       console.log('Tercero Llamado...')
//       console.log(`Personajes: ${data1.info.count}`);
//       console.log(`Primer Personaje: ${data2.name}`);
//       console.log(`Dimensión: ${data3.dimension}`);
//     });
//   });
// });