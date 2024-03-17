<?php

// #### หาวันที่ระหว่างวันที่เริ่มถึงสิ้นสุด #### //

use App\Models\employees_plant;
use App\Models\Notifications;
use App\Models\plants;
use App\Models\product_items;
use App\Models\product_stock;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

if (!function_exists('helperDateDiff')) {
    function helperDateDiff($start_date, $end_date)
    {
        $start_date = new DateTime($start_date);
        $end_date = new DateTime($end_date);
        $interval = $start_date->diff($end_date);
        return $interval->format('%a วัน %H ชม. %i นาที');
    }
}

// #### แสดงสถานะด้วยรูปแบบ HTML #### //
if (!function_exists('helperStatusShow')) {
    function helperStatusShow($status)
    {
        $data = [
            0 => '<span class="badge badge-secondary p-1">Disable</span>',
            1 => '<span class="badge badge-success p-1">Enable</span>'
        ];

        return (isset($data[$status])) ? $data[$status] : null;
    }
}
 