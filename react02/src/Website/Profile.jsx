import React from 'react'

class Profile extends React.Component {
    state = {}
    render() {
        return (
            <div>
                <h1>Profile</h1>
                <table border="1px">
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Location</td>
                            <td>Age</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Madhu</td>
                            <td>Bengaluru</td>
                            <td>22</td>
                        </tr>
                        <tr>
                            <td>Ruchika</td>
                            <td>Bengaluru</td>
                            <td>23
    
                        </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Profile;