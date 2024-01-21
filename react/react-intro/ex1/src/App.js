import logo from './logo.svg';
import './App.css';

function App() {
  const companies = [
    { name: "Tesla", revenue: 140 },
    { name: "Microsoft", revenue: 300 },
    { name: "Google", revenue: 600 }
  ]


  const showCompany = (name, revenue) => {
    return `${name} makes ${revenue} every year`;
  }

  return (
    <div className="ex-space">
      <h4 className='ex-title'>Exercise 1</h4>
      <div className="exercise" id="ex-1">
        {
          companies.map(company => <div>{showCompany(company.name, company.revenue)}</div>)
        }
      </div>
    </div>
  )
}
export default App;
