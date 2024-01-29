const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
  const { nombre, propietario, email, fecha, sintomas, id } = paciente;

  const handleEliminar = () => {
    const respuesta = confirm('¿Deseas eliminar el paciente?');

    if(respuesta) eliminarPaciente(id);
  }

  return (
    <div className="flex flex-col gap-6 h-fit px-5 py-10 mb-1 rounded-xl bg-white shadow-md">
      <div className="flex flex-col gap-3">

        <p className="font-bold text-gray-700 uppercase">Nombre:
          <span className="font-normal normal-case"> {nombre} </span>
        </p>

        <p className="font-bold text-gray-700 uppercase">Propietario:
          <span className="font-normal normal-case"> {propietario} </span>
        </p>

        <p className="font-bold text-gray-700 uppercase">E-mail:
          <span className="font-normal normal-case"> {email} </span>
        </p>

        <p className="font-bold text-gray-700 uppercase">Fecha de alta:
          <span className="font-normal normal-case"> {fecha} </span>
        </p>

        <p className="font-bold text-gray-700 uppercase">Síntomas:
          <span className="font-normal normal-case"> {sintomas} </span>
        </p>

      </div>

      <div className="flex gap-2">
        <button type="button" className="py-2 px-10 font-bold uppercase bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg"
          onClick={() => setPaciente(paciente)}>
          Editar</button>
        <button type="button" className="py-2 px-10 font-bold uppercase bg-red-600 hover:bg-red-700 text-white rounded-lg"
          onClick={handleEliminar}
        >
          Eliminar</button>
      </div>

    </div>
  )

}

export default Paciente;