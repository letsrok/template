<?php
/** @var $model StoreCategory[] */
?>
<ul>
    <?php foreach ($model as $item): ?>
        <li>
            <a href="/store/<?=$item->path;?>"><?=$item->name;?></a>
        </li>
    <?php endforeach; ?>
</ul>
