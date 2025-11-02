import visaLogo from './assets/images/Visa.png';
import masterLogo from './assets/images/master.png';

function CreditCard(props) {
  const logos = {
    'Visa': visaLogo,
    'Master Card': masterLogo,
  };
  const logo = logos[props.type];

  const last4 = String(props.number).slice(-4);
  const masked = '•••• •••• •••• ' + last4;

  const mm = props.expirationMonth < 10
    ? '0' + props.expirationMonth
    : String(props.expirationMonth);
  const yy = String(props.expirationYear).slice(-2);

  return (
    <div
      className="credit-card"
      style={{
        backgroundColor: props.bgColor,
        color: props.color,
        width: 330,
        borderRadius: 12,
        padding: 16,
        fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial',
      }}
    >
      <p style={{ margin: 0, textAlign: 'right' }}>
        <img src={logo} alt={props.type} style={{ height: 28 }} />
      </p>

      <p style={{ margin: '8px 0', fontSize: 22, letterSpacing: 2 }}>{masked}</p>

      <p style={{ margin: 0 }}>
        Expires {mm}/{yy} &nbsp; {props.bank}
      </p>

      <p style={{ margin: '4px 0 0' }}>{props.owner}</p>
    </div>
  );
}

export default CreditCard;
