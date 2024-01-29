import { useState, useEffect } from 'react'
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from './components/ListadoPacientes'

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id);
    setPacientes(pacientesActualizados);
  }

  return (
    <div className='container flex flex-col gap-20 mt-10 ml-5'>
      <Header />

      <div className='md:flex gap-10'>
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente} />
        <ListadoPacientes
          pacientes={pacientes}
          paciente={paciente}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente} />
      </div>

    </div>
  )
}

export default App
