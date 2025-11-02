function BoxColor(props) {
  const bg = `rgb(${props.r},${props.g},${props.b})`;

  const toHex = (n) => Number(n).toString(16).padStart(2, '0');
  const hex = `#${toHex(props.r)}${toHex(props.g)}${toHex(props.b)}`;

  return (
    <div
      style={{
        backgroundColor: bg,
        color: '#fff',
        border: '2px solid #000',
        padding: 20,
        margin: '12px 0',
        textAlign: 'center',
        fontSize: 24,
        borderRadius: 6,
        width:520
      }}
    >
      <div>rgb({props.r},{props.g},{props.b})</div>
      <div>{hex}</div>
    </div>
  );
}

export default BoxColor;
