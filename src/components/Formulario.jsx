import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false);

  /* Valida si el paciente actual del state tiene contenido al hacer click en "Editar", en cuyo caso, 
  vuelve a llenar el formulario con los valores del state */
  useEffect(() => {
    if (Object.keys(paciente).length) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }
  }, [paciente])

  const generarID = () => {
    const id = Math.random().toString().substring(0, 1) +
      Date.now().toString();

    return id;
  };

  // Hook que se ejecuta cuando se envía el formulario
  const handleSubmit = e => {
    e.preventDefault()

    //Valida del formulario
    if ([nombre, propietario, email, fecha, sintomas].includes('')) {
      setError(true);
      window.scrollTo({top: 50, behavior: 'smooth'});
      return;
    }
    setError(false);
    const datosPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas
    }

    /* Validación al dar "Editar Paciente": si el paciente ya tiene id, recorre el array de pacientes, ubica al paciente que corresponde
    con el id, y lo actualiza */
    if(paciente.id) {
      datosPaciente.id = paciente.id;
      const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? datosPaciente : pacienteState);
      setPacientes(pacientesActualizados);
      setPaciente({});
    } else {
      /* Si el paciente no tiene id, significa que todavía no está ingresado. 
      Entonces agrega el nuevo paciente al array de pacientes */
      datosPaciente.id = generarID();
      setPacientes([...pacientes, datosPaciente]);
    }

    //Vacía el formulario
    setNombre('');
    setPropietario('');
    setEmail('');
    setFecha('');
    setSintomas('');
  }

  return (
    <div className="flex flex-col gap-5 mb-10 items-center md:w-1/2 lg:w-2/5">
      <h2 className="text-3xl font-black">Seguimiento de pacientes</h2>

      <h3 className="text-lg">Añadir pacientes y
        <span className="font-bold text-indigo-600"> administrarlos</span>
      </h3>

      {/* Formulario*/}

      <form className="flex flex-col gap-6 w-full py-6 px-5 bg-white shadow-md rounded-md" action="" onSubmit={handleSubmit}>

        {error && <Error>
          <h2>Todos los campos deben ser completados</h2>
        </Error>}

        {/* Nombre de mascota */}
        <div className="flex flex-col gap-3">
          <label className="font-bold uppercase" htmlFor="nombre-mascota">
            Nombre de la mascota
          </label>
          <input type="text" className="p-1 border-2 rounded-md" id="nombre-mascota"
            value={nombre} onChange={e => setNombre(e.target.value)} />
        </div>

        {/* Nombre de propietario */}
        <div className="flex flex-col gap-3">
          <label className="font-bold uppercase" htmlFor="nombre-propietario">
            Nombre del propietario
          </label>
          <input type="text" className="p-1 border-2 rounded-md" id="nombre-propietario"
            value={propietario} onChange={e => setPropietario(e.target.value)} />
        </div>

        {/* E-mail */}
        <div className="flex flex-col gap-3">
          <label className="font-bold uppercase" htmlFor="email">
            E-mail
          </label>
          <input type="text" className="p-1 border-2 rounded-md" id="email"
            value={email} onChange={e => setEmail(e.target.value)} />
        </div>

        {/* Fecha de alta */}
        <div className="flex flex-col gap-3">
          <label className="font-bold uppercase" htmlFor="fecha-alta">
            Fecha de alta
          </label>
          <input type="date" className="p-1 border-2 rounded-md" id="fecha-alta"
            value={fecha} onChange={e => setFecha(e.target.value)} />
        </div>

        {/* Detalle de síntomas */}
        <div className="flex flex-col gap-3">
          <label className="font-bold uppercase" htmlFor="sintomas">
            Síntomas de la mascota
          </label>
          <textarea className="p-1 border-2 rounded-md" name="sintomas" id="sintomas" cols="10" rows="5"
            value={sintomas} onChange={e => setSintomas(e.target.value)}></textarea>
        </div>

        <input type="submit" className="w-full p-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-md cursor-pointer transition-all" 
        value={paciente.id ? 'Editar paciente' : 'Agregar paciente'} />

      </form>
    </div>
  )
}

export default Formulario;


