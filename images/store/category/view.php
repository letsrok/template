<?php
/* @var $category StoreCategory */
/* @var $dataProvider CActiveDataProvider */

$mainAssets = Yii::app()->getTheme()->getAssetsUrl();
Yii::app()->getClientScript()->registerScriptFile($mainAssets . '/js/store.js');

$this->title =  $category->getMetaTile();
$this->description = $category->getMetaDescription();
$this->keywords =  $category->getMetaKeywords();
$this->canonical = $category->getMetaCanonical();

/*$this->breadcrumbs = [Yii::t("StoreModule.store", "Catalog") => ['/store/product/index']];*/

$this->breadcrumbs = array_merge(
    $this->breadcrumbs,
    $category->getBreadcrumbs(true)
);

?>

<?php
$this->widget('application.modules.store.widgets.CategoryWidget');
?>
<article>
<h1>
	<?= CHtml::encode($category->getTitle()); ?>
</h1>


<div class="subcats">
	<?php
	$this->widget('application.modules.store.widgets.SubCategoryWidget', ['category' => $category]);
	?>
</div>


<?php $this->widget(
	'zii.widgets.CListView', [
		'dataProvider' => $dataProvider,
		'itemView' => '//store/product/_item',
		'template' => '
			{items}
			{pager}
		',
		'summaryText' => '',
		'enableHistory' => true,
		'cssFile' => false,
		'pagerCssClass' => 'catalog__pagination',
		'pager' => [
			'header' => '',
			'prevPageLabel' => '<i class="fa fa-long-arrow-left"></i>',
			'nextPageLabel' => '<i class="fa fa-long-arrow-right"></i>',
			'firstPageLabel' => false,
			'lastPageLabel' => false,
			'htmlOptions' => [
				'class' => 'pagination'
			]
		]
	]
); ?>
</article>

<script type="text/javascript">
    $(document).ready(function () {
        $(document).on('mouseover', '.item_type_img_wrap', function () {
            var img = $(this).parents('.item').find('#main-image');
            var url = $(this).data('img');
            if (img && url) {
                img.attr('src', url);
            }
        })
    });
</script>
