jQuery(document).ready(function () {
  jQuery("#gallery").unitegallery({
    gallery_theme: "tiles",
    theme_enable_preloader: false,

    //tiles options:
    tiles_col_width: 250,
    tiles_align: "center",
    tiles_type: "justified",
    tiles_space_between_cols: 10,
    tiles_space_between_cols_mobile: 3,
    tiles_exact_width: false,
    tiles_include_padding: true,
    tiles_min_columns: 2,
    tiles_max_columns: 0,
    tiles_set_initial_height: true,
    tiles_enable_transition: true,
    tile_enable_icons: false,

    //Lightbox
    lightbox_show_numbers: true,
    lightbox_numbers_size: 16,
    lightbox_numbers_padding_top: 12,
  });
});
