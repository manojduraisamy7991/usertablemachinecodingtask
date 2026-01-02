import { useFetch } from "./useFetch";
import "./styles.css";

const END_POINT = "https://dummyjson.com/users";
export default function App() {
  const { data, loading } = useFetch(END_POINT);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (data.length === 0) {
    return <div>User List is Empty </div>;
  }
  return (
    <div className="App">
      <h1>User List</h1>
      <table>
        <thead>
          <tr>
            <th>User Name</th>
          </tr>
        </thead>
        <tbody>
          {data.map((_value) => {
            return (
              <tr key={_value.id}>
                <td> {_value.username}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
