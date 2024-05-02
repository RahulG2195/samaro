import React from 'react'

const ProdTable = () => {
  const Dimensions = [
    {
      'key': '1',
      'type': 'Length',
      'value': '14 in'
    },
    {
      'key': '2',
      'type': 'Width',
      'value': '14 in'
    },
    {
      'key': '3',
      'type': 'Height',
      'value': '2 in'
    },
    {
      'key': '4',
      'type': 'm²/pack',
      'value': '1.873'
    },
    {
      'key': '1',
      'type': 'Planks/pack',
      'value': '6'
    },
  ]
  return (
    <>
    <table className="table table-borderless prodtable mb-md-5 mt-md-4 my-2">
      <tbody>
      {
        Dimensions.map(val => (
        <tr key={val.key}>
          <td scope="col" width="50%">{val.type}</td>
          <td scope="col" width="50%">{val.value}</td>
        </tr>
        ))
      }
        </tbody>
    </table>
    </>
  )
}

export default ProdTable