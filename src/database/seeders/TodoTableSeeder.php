<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TodoTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('todos')->insert(
                [
                    [
                        'content' => 'seederTest',
                        'importance' => '2',
                        'deleted_at' => null,
                        'created_at' => now(),
                        'updated_at' => now(),
                    ],
                ]
            );
    }
}
