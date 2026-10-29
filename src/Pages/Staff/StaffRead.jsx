const StaffRead = () => {
    return (
      <>
      <table border={1}>
        <thead>
          <tr>
            <th>직원 번호</th>
            <th>직원 이름</th>
            <th>휴대전화</th>
          </tr>
        </thead>
        <tbody>
          {
            staffs.map((e,i) => {
              <tr key={i}>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.phone}</td>
              </tr>
            })
          }
        </tbody>
        </table>
      </>
    )
  }

  export default StaffRead