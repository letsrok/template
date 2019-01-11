<?php

/* @var $product Product */

$this->title = $product->getMetaTitle();
$this->description = $product->getMetaDescription();
$this->keywords = $product->getMetaKeywords();
$this->canonical = $product->getMetaCanonical();

Yii::app()->getClientScript()->registerScriptFile($this->mainAssets . '/js/store.js', CClientScript::POS_END);

$this->breadcrumbs = array_merge(
    [Yii::t("StoreModule.store", 'Catalog') => ['/store/product/index']],
    $product->category ? $product->category->getBreadcrumbs(true) : [],
    [CHtml::encode($product->name)]
);
?>


<article>
    <?php $this->widget(
            'zii.widgets.CBreadcrumbs',
            [
                'links' => $this->breadcrumbs,
                'activeLinkTemplate' => '<li><a href="{url}">{label}</a>',
                'inactiveLinkTemplate' => '<li><a>{label}</a>',
                'homeLink' => false,
                'separator' => '',
                'tagName' => 'ul',
            ]
     );?>
     
    <div class="product-top">
        <div class="product-top-left">
            <div class="product_big_img">
                <img src="<?= $product->getImageUrl(457, 300, true); ?>"
                     class="product-gallery__main-img"
                     alt="<?= CHtml::encode($product->getImageAlt()); ?>"
                     title="<?= CHtml::encode($product->getImageTitle()); ?>"
                >
            </div>
            <div class="item_types_wrap">
                <?php if (isset($variantsBottom)): ?>
                    <?php foreach ($variantsBottom as $item): ?>
                        <?php
                        /** @var ProductVariant $item  */
                        ?>
                        <div class="item_type">
                            <div data-img="<?= $item->getImageUrl(457, 300, true, null, 'image'); ?>"
                                 class="item_type_img_wrap">
                                <img src="<?= $item->getImageUrl(100, 75, true, null, 'image_sm'); ?>" alt="">
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
        </div>
        <div class="product-top-right">
            <div class="product-trt">
                <div class="product-title">
                    <h1 class="h1"><?= CHtml::encode($product->getTitle()); ?></h1>
                </div>
                <div class="product-charact">
                    <?php if (isset($variantsRight)): ?>
                        <?php foreach ($variantsRight as $item): ?>
                            <?php
                            /** @var ProductVariant $item  */
                            ?>
                        <p>
                            <?php if ($item->amount): ?>
                                <strong><?= $item->amount; ?></strong> <?= $item->price_unit; ?>
                                -
                            <?php endif; ?>

                            <?php if ($item->link1 && $item->tooltip1): ?>
                                <span class="special" data-tool="<?= $item->tooltip1; ?>"><?= $item->link1; ?></span>
                            <?php endif; ?>
                            <?php if ($item->link1 && !$item->tooltip1): ?>
                                <?= $item->link1; ?>
                            <?php endif; ?>
                            <?php if ($item->attribute_value): ?>
                                ,
                                <?= $item->attribute_value; ?> <?= $item->attribute->unit; ?>
                            <?php endif; ?>
                            <?php if ($item->link2 && $item->tooltip2): ?>
                                <span class="stock" data-tool="<?= $item->tooltip2; ?>">
                                <?= $item->link2; ?>
                            </span>
                            <?php endif; ?>
                            <?php if ($item->link2 && !$item->tooltip2): ?>
                                <?= $item->link2; ?>
                            <?php endif; ?>
                        </p>
                        <?php endforeach; ?>
                    <?php endif; ?>
                </div>
            </div>
            <div class="product-speci-wrap">
                <?php foreach ($product->getAttributeGroups() as $groupName => $items): ?>
                    <?php foreach ($items as $attribute): ?>
                        <?php if ($product->attribute($attribute)): ?>
                            <dl class="prodict-speci">
                                <dt class="product-speci-name">
                                <span>
                                    <?= CHtml::encode($attribute->title); ?>
                                </span>
                                </dt>
                                <dd class="product-speci-value">
                                <span>
                                    <?= AttributeRender::renderValue($attribute, $product->attribute($attribute)); ?>
                                </span>
                                </dd>
                            </dl>
                        <?php endif; ?>
                    <?php endforeach; ?>
                <?php endforeach; ?>
            </div>
            <div class="summ_product">
                <a href="/servis#form_wrap">Заказать бесплатный расчет</a>
            </div>
        </div>
    </div>
    <div class="product-bottom">
        <?php if (!empty($product->description)): ?>
				<div class="shwtxt">
                <?= $product->description ?>
				</div>
        <?php endif; ?>
    </div>
</article>
<script type="text/javascript">
    $(document).ready(function () {
        $(document).on('mouseover', '.item_type_img_wrap', function () {
            var img = $('.product-gallery__main-img');
            var url = $(this).data('img');
            if (img && url) {
                img.attr('src', url);
            }
        })
    });
</script>


<?php $this->widget('application.modules.store.widgets.LinkedProductsWidget', ['product' => $product, 'code' => null,]); ?>

