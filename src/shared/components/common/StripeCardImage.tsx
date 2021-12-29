import { Image } from 'antd';
import visa from '#/assets/images/creditCard/visa.png';
import mastercard from '#/assets/images/creditCard/mastercard.png';
import discover from '#/assets/images/creditCard/discover.png';
import americanExpress from '#/assets/images/creditCard/amex.png';
import dinersClub from '#/assets/images/creditCard/diners.png';
import jcb from '#/assets/images/creditCard/jcb.png';
import unionPay from '#/assets/images/creditCard/unionpay.png';

interface Props {
  brand?: string;
}

enum CardBrand {
  Visa = 'visa',
  Mastercard = 'mastercard',
  Discover = 'discover',
  AmericanExpress = 'amex',
  DinersClub = 'dinersClub',
  Jcb = 'jcb',
  UnionPay = 'unionpay',
}

function StripeCardImage({ brand }: Props) {
  const cardImage = (() => {
    switch (brand) {
      case CardBrand.Visa:
        return visa;
      case CardBrand.Mastercard:
        return mastercard;
      case CardBrand.Discover:
        return discover;
      case CardBrand.AmericanExpress:
        return americanExpress;
      case CardBrand.DinersClub:
        return dinersClub;
      case CardBrand.Jcb:
        return jcb;
      case CardBrand.UnionPay:
        return unionPay;
      default:
        return;
    }
  })();

  return (
    <div className="flex items-center shadow-md ml-2 r">
      <Image width={48} height={32} preview={false} src={cardImage} />
    </div>
  );
}

export default StripeCardImage;
