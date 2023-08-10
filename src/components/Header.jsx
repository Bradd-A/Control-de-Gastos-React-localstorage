import ControlBudget from "./ControlBudget"
import NewBudget from "./NewBudget"

const Header = ({presupuesto, setPresupuesto, isValidPresupuesto, setIsValidPresupuesto, gastos, setGastos}) => {
  return (
    <header>
        <h1>Planificador de Gastos</h1>

        {isValidPresupuesto ? (
            <ControlBudget 
              gastos={gastos}
              setGastos={setGastos}
              presupuesto={presupuesto}
              setPresupuesto={setPresupuesto}
              setIsValidPresupuesto={setIsValidPresupuesto}
            />
        ) : (
                <NewBudget
                    presupuesto={presupuesto}
                    setPresupuesto={setPresupuesto}
                    setIsValidPresupuesto={setIsValidPresupuesto}
                />
        )}
        
    </header>
  )
}

export default Header