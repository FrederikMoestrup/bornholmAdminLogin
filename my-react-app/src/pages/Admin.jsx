import { useState} from 'react';
function Admin({ users }) {

 // const [user, setUser] = useState(null);

  return (
    <div>
       <h1>List of users</h1>
            <table>
                <thead>
                    <tr>
                        <th>userid</th>
                        <th>login</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                    <tr key={crypto.randomUUID()}>
                        <td>{user.userid}</td>
                        <td>{user.login}</td>
                        <td>
                            <button>View</button>
                        </td>
                    </tr> 
                    ))}
                </tbody>
            </table>
  
    </div>
  );
}
export default Admin