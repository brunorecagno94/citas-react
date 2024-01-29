import Paciente from "./Paciente"

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {

  return (
    <div className="flex flex-col items-center gap-5 md:w-1/2 lg:w-3/5">

      {pacientes.length ? (
        <>
          <h2 className="text-3xl font-black">Listado Pacientes</h2>
          <h3 className="text-xl">Administra tus
            <span className="text-xl font-bold text-indigo-600"> Pacientes y Citas</span>
          </h3>
          <div className="flex flex-col gap-5 w-full overflow-scroll">

            {pacientes.map(paciente => {

              return (
                <Paciente
                  paciente={paciente}
                  key={paciente.id}
                  setPaciente={setPaciente}
                  eliminarPaciente={eliminarPaciente}
                />
              );
            })}
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col gap-5 justify-center items-center">
            <h2 className="text-3xl font-black">Aún no hay pacientes</h2>
            <h3 className="text-xl font-bold text-indigo-600"> Compienza a agregarlos en el formulario</h3>
          </div>
        </>
      )}

    </div>

  )
}

export default ListadoPacientes;