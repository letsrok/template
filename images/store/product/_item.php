<?php
/**
 * @var Product $data
 */
$variantsBottom = array_slice($data->getVariantsByPosition(Product::POSITION_BOTTOM), 0, 6);
?>

<div class="item">
	<div class="item_img_wrap">
		<a href="<?= ProductHelper::getUrl($data); ?>"><img data-big="<?=$data->getImageUrl()?>" src="<?= $data->getImageUrl(457, 300, true); ?>" id="main-image" />
		</a>
	</div>
	<div class="item_title">
		<a href="<?= ProductHelper::getUrl($data); ?>"><?= CHtml::encode($data->getName()); ?></a>
	</div>
	<div class="item_types_wrap">
        <?php if (isset($variantsBottom)): ?>
            <?php foreach ($variantsBottom as $item): ?>
                <div class="item_type">
                    <div data-img="<?= $item->getImageUrl(457, 300, true, null, 'image'); ?>"
                            class="item_type_img_wrap">
                        <img src="<?= $item->getImageUrl(100, 100, true, null, 'image_sm'); ?>" alt="">
                    </div>
                    <div class="item_type_title">
                        <p><?= $item->attribute_value; ?></p>
                    </div>
                    <div class="item_type_price">
                        <p><strong><?= $item->amount; ?></strong> <?= $item->price_unit; ?></p>
                    </div>
                    <div class="item_type_status">
                        <?php if ((int)$item->stock === 1): ?>
                            <span class="item_in_stock">В наличии</span>
                        <?php else: ?>
                            <span class="item_not_stock">Под заказ</span>
                        <?php endif; ?>
                    </div>
                </div>
            <?php endforeach; ?>
        <?php endif; ?>
	</div>
	<div class="more">
		<a href="<?= ProductHelper::getUrl($data); ?>">Подробнее</a>
	</div>
</div>