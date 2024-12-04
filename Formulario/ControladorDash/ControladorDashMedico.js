import {buscarMedicos} from "../Servicios/ServiciosMedico.js"

let medicos=[
    {
        id: 10,
        nombre:"Rafael Nadal Orozco",
        matriculaProfesional:"realizado",
        especialidad:"cirujano",
        salario:2000000,
        ips:"Sura",
        correo:"rafanadal@gmail.com",
        telefono:"+57 229430349",
        direccionConsultorio:"Calle 2b #4a",
        finDeSemanaDisponible:true
    },
    {
        id:11,
        nombre:"Juan Pérez López",
        matriculaProfesional: "realizado",
        especialidad: "Pediatra",
        salario: 1800000,
        ips: "Colpatria",
        correo: "juanperez@gmail.com",
        telefono: "+57 321654987",
        direccionConsultorio: "Calle 12 #5-45",
        finDeSemanaDisponible: true
    },
    {
        id: 12,
        nombre: "Ana María Gómez",
        matriculaProfesional: "realizado",
        especialidad: "Ginecóloga",
        salario: 2200000,
        ips: "SaludTotal",
        correo: "anamaria@gmail.com",
        telefono: "+57 312358792",
        direccionConsultorio: "Carrera 15 #8-23",
        finDeSemanaDisponible: false
    },
    {
        id: 13,
        nombre: "Carlos Alberto Martínez",
        matriculaProfesional: "realizado",
        especialidad: "Dermatólogo",
        salario: 2500000,
        ips: "Sanitas",
        correo: "carlosmartinez@gmail.com",
        telefono: "+57 300456789",
        direccionConsultorio: "Avenida 9 #17-11",
        finDeSemanaDisponible: true
    },
    {
        id: 14,
        nombre: "Laura Cristina Rodríguez",
        matriculaProfesional: "realizado",
        especialidad: "Psicóloga",
        salario: 1700000,
        ips: "Coomeva",
        correo: "lauracristina@gmail.com",
        telefono: "+57 320112233",
        direccionConsultorio:"Calle 45 #7-88",
        finDeSemanaDisponible:true
    },
    {
        id: 15,
        nombre: "Felipe Andrés González",
        matriculaProfesional: "realizado",
        especialidad: "Oftalmólogo",
        salario: 2300000,
        ips: "EPSSur",
        correo: "felipegonzalez@gmail.com",
        telefono: "+57 315478900",
        direccionConsultorio: "Carrera 28 #4-65",
        finDeSemanaDisponible: false
    }
]

buscarMedicos()
   .then(function(respuestaBack){
    console.log(respuestaBack)
    let fila=document.getElementById("fila")

respuestaBack.forEach(function(medico){
    console.log(medico)
    
    let columna=document.createElement("div")
    columna.classList.add("col")
    
    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","p-5","h-100","shadow")
     
    let nombre=document.createElement("h2")
    nombre.textContent=medico.nombre
    let matriculaProfesional=document.createElement("p")
    matriculaProfesional.textContent=medico.matriculaProfesional
    let especialidad=document.createElement("p")
    especialidad.textContent=medico.especialidad
    let salario=document.createElement("p")
    salario.textContent=medico.salario
    let ips=document.createElement("p")
    ips.textContent=medico.ips
    let correo=document.createElement("p")
    correo.textContent=medico.correo
    let telefono=document.createElement("p")
    telefono.textContent=medico.telefono
    let direccionConsultorio=document.createElement("p")
    direccionConsultorio.textContent=medico.direccionConsultorio
    let finDeSemanaDisponible=document.createElement("p")
    finDeSemanaDisponible.textContent=medico.finDeSemanaDisponible
    
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(matriculaProfesional)
    tarjeta.appendChild(especialidad)
    tarjeta.appendChild(salario)
    tarjeta.appendChild(ips)
    tarjeta.appendChild(correo)
    tarjeta.appendChild(telefono)
    tarjeta.appendChild(direccionConsultorio)
    tarjeta.appendChild(finDeSemanaDisponible)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)
})
   })