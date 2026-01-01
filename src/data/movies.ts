export interface ConanMovie {
  title: string;
  movie: string;
  year: string;
  img: string;
  htmlFile?: string;
  badge?: string;
}

export interface HHMovie {
  title: string;
  time: string;
  img: string;
  link: string;
}

export interface TVSeries {
  title: string;
  time: string;
  img: string;
  link: string;
}


export const tvSeries: TVSeries[] = [
  { title: "Thám Tử Lừng Danh Conan", time: "TV Series", img: "https://phimimg.com/upload/vod/20240310-1/025424cf62248b9a7b54279ef5416e26.jpg", link: "/tham-tu-lung-danh-conan" },
];

export const conanMovies: ConanMovie[] = [
  { title: "Dư Ảnh Của Độc Nhãn", movie: "28", year: "2025", img: "https://upload.wikimedia.org/wikipedia/vi/3/3c/Conan_2025.jpg", htmlFile: "conan-movie-28", badge: "MỚI" },
  { title: "Ngôi Sao 5 Cánh 1 Triệu Đô", movie: "27", year: "2024", img: "https://upload.wikimedia.org/wikipedia/vi/9/9d/Conan_Movie_27.jpg", htmlFile: "conan-movie-27" },
  { title: "Tàu Ngầm Sắt Màu Đen", movie: "26", year: "2023", img: "https://upload.wikimedia.org/wikipedia/vi/5/58/Conan_-_The_Black_Iron_Submarine_-_Vietnam_poster.jpg", htmlFile: "conan-movie-26" },
  { title: "Nàng Dâu Halloween", movie: "25", year: "2022", img: "https://kilala.vn/data/upload/article/8821/Conan-Movie%202022.jpg", htmlFile: "conan-movie-25" },
  { title: "Viên Đạn Đỏ", movie: "24", year: "2021", img: "https://upload.wikimedia.org/wikipedia/vi/d/d9/ConanMovie24.jpg", htmlFile: "conan-movie-24" },
  { title: "Cú Đấm Sapphire Xanh", movie: "23", year: "2019", img: "https://upload.wikimedia.org/wikipedia/vi/2/21/Detective-conan-movie-2019-poster.jpg", htmlFile: "conan-movie-23" },
  { title: "Kẻ Hành Pháp Zero", movie: "22", year: "2018", img: "https://upload.wikimedia.org/wikipedia/vi/e/e1/Poster_ConanMovie22_2018-01-17.jpg", htmlFile: "conan-movie-22" },
  { title: "Bản Tình Ca Màu Đỏ Thẫm", movie: "21", year: "2017", img: "https://upload.wikimedia.org/wikipedia/vi/thumb/f/f5/Detective_Conan_movie_2017.jpg/339px-Detective_Conan_movie_2017.jpg", htmlFile: "conan-movie-21" },
  { title: "Cơn Ác Mộng Đen Tối", movie: "20", year: "2016", img: "https://upload.wikimedia.org/wikipedia/vi/0/00/%C3%81p_ph%C3%ADch_phim_Th%C3%A1m_t%E1%BB%AD_l%E1%BB%ABng_danh_Conan_th%E1%BB%A9_20.jpg", htmlFile: "conan-movie-20" },
  { title: "Hoa Hướng Dương Rực Lửa", movie: "19", year: "2015", img: "https://upload.wikimedia.org/wikipedia/en/5/5d/Detective_Conan%2C_Sunflowers_of_Inferno_Movie_Poster.png", htmlFile: "conan-movie-19" },
  { title: "Sát Thủ Bắn Tỉa Không Tưởng", movie: "18", year: "2014", img: "https://upload.wikimedia.org/wikipedia/vi/c/c1/Detective_Conan_2014.jpg", htmlFile: "conan-movie-18" },
  { title: "Con Mắt Bí Ẩn", movie: "17", year: "2013", img: "https://upload.wikimedia.org/wikipedia/vi/thumb/8/8a/Poster_Conan_movie_17.jpg/339px-Poster_Conan_movie_17.jpg", htmlFile: "conan-movie-17" },
  { title: "Tiền Đạo Thứ 11", movie: "16", year: "2012", img: "https://upload.wikimedia.org/wikipedia/vi/thumb/8/8c/Detective_Conan_Movie_16_poster.jpg/337px-Detective_Conan_Movie_16_poster.jpg", htmlFile: "conan-movie-16" },
  { title: "15 Phút Tĩnh Lặng", movie: "15", year: "2011", img: "https://upload.wikimedia.org/wikipedia/vi/3/30/Poster_Conan_movie_15.jpg", htmlFile: "conan-movie-15" },
  { title: "Con Tàu Biến Mất", movie: "14", year: "2010", img: "https://upload.wikimedia.org/wikipedia/vi/1/1d/Case_Closed_The_Lost_Ship_in_the_Sky_Poster.jpg", htmlFile: "conan-movie-14" },
  { title: "Truy Lùng Tổ Chức Áo Đen", movie: "13", year: "2009", img: "https://upload.wikimedia.org/wikipedia/vi/thumb/9/9b/DetectiveConanMovie13.jpg/320px-DetectiveConanMovie13.jpg", htmlFile: "conan-movie-13" },
  { title: "Tận Cùng Sự Sợ Hãi", movie: "12", year: "2008", img: "https://upload.wikimedia.org/wikipedia/vi/e/ec/DetectiveConanMovie12.jpg", htmlFile: "conan-movie-12" },
  { title: "Kho Báu Đáy Đại Dương", movie: "11", year: "2007", img: "https://upload.wikimedia.org/wikipedia/vi/d/d0/DetectiveConanMovie11.jpg", htmlFile: "conan-movie-11" },
  { title: "Lễ Cầu Hôn Thám Tử", movie: "10", year: "2006", img: "https://upload.wikimedia.org/wikipedia/vi/1/16/DetectiveConanMovie10.jpg", htmlFile: "conan-movie-10" },
  { title: "Âm Mưu Trên Biển", movie: "9", year: "2005", img: "https://upload.wikimedia.org/wikipedia/vi/b/b8/DetectiveConanMovie9.jpg", htmlFile: "conan-movie-9" },
  { title: "Nhà Ảo Thuật Bạc", movie: "8", year: "2004", img: "https://upload.wikimedia.org/wikipedia/vi/2/2e/DetectiveConanMovie8.jpg", htmlFile: "conan-movie-8" },
  { title: "Mê Cung Thành Phố Cổ", movie: "7", year: "2003", img: "https://upload.wikimedia.org/wikipedia/vi/c/c8/DetectiveConanMovie7.jpg", htmlFile: "conan-movie-7" },
  { title: "Bóng Ma Đường Baker", movie: "6", year: "2002", img: "https://upload.wikimedia.org/wikipedia/vi/d/d3/Case_Closed_Movie_5.jpg", htmlFile: "conan-movie-6" },
  { title: "Những Giây Cuối Cùng", movie: "5", year: "2001", img: "https://upload.wikimedia.org/wikipedia/vi/4/46/DetectiveConanMovie5.jpg", htmlFile: "conan-movie-5" },
  { title: "Thủ Phạm Trong Mắt", movie: "4", year: "2000", img: "https://upload.wikimedia.org/wikipedia/vi/d/df/Case_closed_movie_4.jpg", htmlFile: "conan-movie-4" },
  { title: "Ảo Thuật Gia Cuối Cùng", movie: "3", year: "1999", img: "https://upload.wikimedia.org/wikipedia/vi/6/69/Case_Closed_movie_3.jpg", htmlFile: "conan-movie-3" },
  { title: "Mục Tiêu Thứ 14", movie: "2", year: "1998", img: "https://upload.wikimedia.org/wikipedia/vi/8/8d/Case_Closed_14_target_%28movie%29.jpg", htmlFile: "conan-movie-2" },
  { title: "Quả Bom Chọc Trời", movie: "1", year: "1997", img: "https://upload.wikimedia.org/wikipedia/vi/3/39/Caseclosed_the_time_bombed_%28movie_1%29.jpg", htmlFile: "conan-movie-1" }
];

export const hhMovies: HHMovie[] = [
  { title: "Thanh Xuân Này Vẫn Là Em", time: "15:44", img: "https://i.ytimg.com/vi/SrFpZcjnD50/hqdefault.jpg", link: "xem-phim/hhdktq/thanh-xuan-nay-van-la-em/tap-full" },
  { title: "Quay Lại Để Yêu Em", time: "24:52", img: "https://img.youtube.com/vi/LJ6rYpID0JY/hqdefault.jpg", link: "xem-phim/hhdktq/quay-lai-de-yeu-em/tap-full" },
  { title: "Tình Yêu Là Nỗi Đau", time: "30:01", img: "https://img.youtube.com/vi/zuZfaCr0HQ8/0.jpg", link: "xem-phim/hhdktq/tinh-yeu-la-noi-dau/tap-full" },
  { title: "Tình Yêu Từ Đây Sao", time: "23:16", img: "https://i.ytimg.com/vi/E2eLCX-tf10/hqdefault.jpg", link: "xem-phim/hhdktq/tinh-yeu-tu-day-sao/tap-full" },
  { title: "Unknown Playlist", time: "20:21", img: "https://i.postimg.cc/SQ5tbtdt/A56BE9DD-25D7-49EA-B85C-95780DD749FA.png", link: "xem-phim/hhdktq/unknown-playlist/1cb" },
  { title: "Khi Tình Yêu Cất Lời Dối Trá", time: "14:04", img: "https://img.youtube.com/vi/2wpESYj2X-w/hqdefault.jpg", link: "xem-phim/hhdktq/khi-tinh-yeu-cat-loi-doi-tra/tap-full" }
];
