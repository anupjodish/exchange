import React from "react";
import WithLoading from "./WithLoading";

const RowTitle = props => {
  return (
    <tr className="row-head">
      <th className="row-title" key="0">
        &nbsp;&nbsp;&nbsp;
      </th>
      {props.currencies.map(cur => {
        return (
          <th className="row-title" key={cur}>
            {cur}
          </th>
        );
      })}
    </tr>
  );
};
const Row = props => {
  let style = props.index%2===0 ? 'alt-row' : '';
  return (
    <tr className={"row-head " + style }>
      <td className="row-title" key="0">
        {props.currency}
      </td>
      {Object.keys(props.values).sort().map((val, index) => {
        return (
          <td className="row-title" key={val}>
            <div>{Number(props.values[val]).toFixed(4)}</div>
            <div>{Number(1/props.values[val]).toFixed(4)}</div>
          </td>
        );
      })}
    </tr>
  );
};

const ExchangeRateTable = props => {
  return (
    <table>
      <RowTitle keys={0} currencies={props.curr} />
      {props.data &&
        props.data.map((v,i) => {
          return <Row currency={v.base} values={v.rates} index={i}/>
        })}
    </table>
  );
};

export default WithLoading(ExchangeRateTable);
