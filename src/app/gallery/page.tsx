"use client";

import Image from 'next/image';
import { FC, MouseEvent } from 'react';

// 定义图片项接口
interface ImageItem {
  src: string;
  alt: string;
  id?: string | number; // 可选的唯一标识符
}

// 图片组件的 Props 类型
interface GalleryImageProps {
  src: string;
  alt: string;
  onClick?: (src: string, alt: string, e: MouseEvent<HTMLButtonElement>) => void;
}

// 画廊组件的 Props 类型
interface ImageGalleryProps {
  images: ImageItem[];
  onImageOpen?: (src: string, alt: string, e: MouseEvent<HTMLButtonElement>) => void;
}

// 单个图片组件
const GalleryImage: FC<GalleryImageProps> = ({ src, alt, onClick }) => {
  // 处理图片点击
  const handleOpen = (e: MouseEvent<HTMLButtonElement>) => {
    if (onClick) onClick(src, alt, e);
  };

  return (
    <div className="mb-4 break-inside-avoid group relative">
      <Image
        src={src}
        alt={alt}
        width={500}  // 设置适当的尺寸
        height={300} // 或使用 fill 属性
        className="w-full rounded-lg shadow-md transition-all duration-300"
      />
      <div className="absolute inset-0 backdrop-blur-sm bg-white/20 flex items-center justify-center transition-all duration-300 rounded-lg opacity-0 group-hover:opacity-100">
        <button
          onClick={handleOpen}
          className="bg-white/80 hover:bg-white text-gray-800 font-semibold py-2 px-6 rounded-md shadow-lg backdrop-blur-sm transform transition-transform duration-300 hover:scale-105"
        >
          Open
        </button>
      </div>
    </div>
  );
};

// 画廊组件
const ImageGallery: FC<ImageGalleryProps> = ({ images, onImageOpen }) => {
  return (
    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-5 gap-4 p-4">
      {images.map((image, index) => (
        <GalleryImage
          key={image.id || index}
          src={image.src}
          alt={image.alt}
          onClick={onImageOpen}
        />
      ))}
    </div>
  );
};

// 博客文章页面组件
const BlogPost: FC = () => {

  // 图片数据数组
  const images: ImageItem[] = [
    // 自然风光
    { id: 1, src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb", alt: "山湖风光" },
    { id: 2, src: "https://images.unsplash.com/photo-1682687982501-1e58ab814714", alt: "雪山日落" },
    { id: 3, src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e", alt: "湖边小屋" },
    { id: 4, src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470", alt: "森林道路" },
    { id: 5, src: "https://images.unsplash.com/photo-1511497584788-876760111969", alt: "峡谷景观" },
    { id: 6, src: "https://images.unsplash.com/photo-1439853949127-fa647821eba0", alt: "海岸日落" },

    // 建筑设计
    { id: 7, src: "https://images.unsplash.com/photo-1616627561950-9f746e330187", alt: "现代建筑" },
    { id: 8, src: "https://images.unsplash.com/photo-1464817739973-0128fe77aaa1", alt: "城市天际线" },
    { id: 9, src: "https://images.unsplash.com/photo-1534430480872-3498386e7856", alt: "桥梁工程" },
    { id: 10, src: "https://images.unsplash.com/photo-1556139943-4bdca53adf1e", alt: "高层建筑" },
    { id: 11, src: "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8", alt: "古典建筑" },

    // 美食摄影
    { id: 12, src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836", alt: "精致料理" },
    { id: 13, src: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd", alt: "健康沙拉" },
    { id: 14, src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1", alt: "早餐布置" },
    { id: 15, src: "https://images.unsplash.com/photo-1565958011703-44f9829ba187", alt: "甜点蛋糕" },

    // 艺术与创意
    { id: 16, src: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119", alt: "抽象艺术" },
    { id: 18, src: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b", alt: "艺术装置" },
    { id: 19, src: "https://images.unsplash.com/photo-1611416517780-eff3a13b0359", alt: "彩色几何" },
    { id: 20, src: "https://images.unsplash.com/photo-1513364776144-60967b0f800f", alt: "创意摄影" },

    // 生活方式
    { id: 21, src: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a", alt: "室内植物" },
    { id: 22, src: "https://images.unsplash.com/photo-1551649001-7a2482d98d05", alt: "工作空间" },
    { id: 23, src: "https://images.unsplash.com/photo-1484101403633-562f891dc89a", alt: "咖啡时光" },
    { id: 24, src: "https://images.unsplash.com/photo-1556911073-a517e752729c", alt: "瑜伽健身" },

    // 旅行探索
    { id: 25, src: "https://images.unsplash.com/photo-1528127269322-539801943592", alt: "城市街景" },
    { id: 26, src: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b", alt: "乡村道路" },
    { id: 27, src: "https://images.unsplash.com/photo-1516815231560-8f41ec531527", alt: "热气球" },
    { id: 28, src: "https://images.unsplash.com/photo-1476990789491-712b869b91a5", alt: "露营帐篷" },
    { id: 29, src: "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c", alt: "山顶远眺" },
    { id: 30, src: "https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7", alt: "海滩度假" },
  ];

  // 处理图片打开
  // const handleImageOpen = (src: string, alt: string, e: MouseEvent<HTMLButtonElement>) => {
  //   console.log(`Opening image: ${alt}`, src);
  //   // 实现图片打开逻辑，例如显示模态框
  // };

  return (
    <div className="pt-20">
        <div>
          <ImageGallery
            images={images}
            // onImageOpen={handleImageOpen}
          />

          <div className="flex justify-center my-8">
            <button className="px-6 py-2 bg-gray-200 hover:bg-gray-300 rounded-full font-medium transition-colors duration-300">
              加载更多
            </button>
          </div>
        </div>
    </div>
  );
};

export default BlogPost;