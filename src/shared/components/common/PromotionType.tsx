import { Tag } from 'antd';
import { TypePromotion } from '#/generated/schemas';
import useTypeSafeTranslation from '#/shared/hooks/useTypeSafeTranslation';

interface Props {
  type?: TypePromotion | null;
}

function PromotionType({ type }: Props) {
  const { t } = useTypeSafeTranslation();

  const promotion = (() => {
    if (type === TypePromotion.FixedCashDiscount)
      return { color: 'var(--success-color)', name: t('promotion.fixedCash') };
    return { color: 'var(--info-color)', name: t('promotion.percentage') };
  })();

  return (
    <Tag color={promotion.color} className="r-40">
      {promotion.name}
    </Tag>
  );
}

export default PromotionType;
