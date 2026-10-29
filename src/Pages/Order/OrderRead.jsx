const OrderRead = ({orders}) => {
    return (
      <>
      <table border={1}>
        <thead>
          <tr>
            <th>주문 번호</th>
            <th>상품이름</th>
            <th>총 금액</th>
          </tr>
        </thead>
        <tbody>
          {
            orders.map((e,i) => 
              <tr key={i}>
                <td>{e.id}</td>
                <td>{e.item}</td>
                <td>{e.total}</td>
              </tr>
            )
          }
        </tbody>
        </table>
      </>
    )
  }

  export default OrderRead