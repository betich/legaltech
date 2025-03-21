export interface Evidence {
  id: number;
  name: string;
  imageSrc: string;
  uploader: string;
}

/*
/images/evidence/demo-medical-certificate.svg /images/evidence/LINE_ALBUM_Evidence_250322_1.jpg /images/evidence/LINE_ALBUM_Evidence_250322_2.jpg /images/evidence/LINE_ALBUM_Evidence_250322_3.jpg /images/evidence/LINE_ALBUM_Evidence_250322_4.jpg /images/evidence/LINE_ALBUM_Evidence_250322_5.jpg /images/evidence/LINE_ALBUM_Evidence_250322_6.jpg /images/evidence/LINE_ALBUM_Evidence_250322_7.jpg /images/evidence/LINE_ALBUM_Evidence_250322_8.jpg /images/evidence/LINE_ALBUM_Evidence_250322_9.jpg /images/evidence/LINE_ALBUM_Evidence_250322_10.jpg /images/evidence/LINE_ALBUM_Evidence_250322_11.jpg /images/evidence/LINE_ALBUM_Evidence_250322_12.jpg /images/evidence/LINE_ALBUM_Evidence_250322_13.jpg /images/evidence/LINE_ALBUM_Evidence_250322_14.jpg /images/evidence/LINE_ALBUM_Evidence_250322_15.jpg /images/evidence/LINE_ALBUM_Evidence_250322_16.jpg /images/evidence/LINE_ALBUM_Evidence_250322_17.jpg /images/evidence/LINE_ALBUM_Evidence_250322_18.jpg /images/evidence/LINE_ALBUM_Evidence_250322_19.jpg /images/evidence/LINE_ALBUM_Evidence_250322_20.jpg /images/evidence/LINE_ALBUM_Evidence_250322_21.jpg /images/evidence/LINE_ALBUM_Evidence_250322_22.jpg /images/evidence/LINE_ALBUM_Evidence_250322_23.jpg /images/evidence/LINE_ALBUM_Evidence_250322_24.jpg /images/evidence/LINE_ALBUM_Evidence_250322_25.jpg /images/evidence/LINE_ALBUM_Evidence_250322_26.jpg /images/evidence/LINE_ALBUM_Evidence_250322_27.jpg /images/evidence/LINE_ALBUM_Evidence_250322_28.jpg /images/evidence/LINE_ALBUM_Evidence_250322_29.jpg /images/evidence/LINE_ALBUM_Evidence_250322_30.jpg /images/evidence/LINE_ALBUM_Evidence_250322_31.jpg /images/evidence/LINE_ALBUM_Evidence_250322_32.jpg /images/evidence/LINE_ALBUM_Evidence_250322_33.jpg /images/evidence/LINE_ALBUM_Evidence_250322_34.jpg /images/evidence/LINE_ALBUM_Evidence_250322_35.jpg /images/evidence/LINE_ALBUM_Evidence_250322_36.jpg /images/evidence/LINE_ALBUM_Evidence_250322_37.jpg /images/evidence/LINE_ALBUM_Evidence_250322_38.jpg /images/evidence/LINE_ALBUM_Evidence_250322_39.jpg /images/evidence/LINE_ALBUM_Evidence_250322_40.jpg /images/evidence/thai-demo-medical-certificate.svg

"ทนายวิชัย" "คุณวิภา" "ทนายปิยะ"
*/

const users = [
  "ทนายวิชัย",
  "คุณวิภา",
  "ทนายปิยะ",
  "คุณปณิธิ",
  "คุณคณุธ",
  "คุณปัณณวิชญ์",
  "ทนายเดชาธร",
  "ทนายนครเขต",
];

export const mockEvidence: Evidence[] = [
  {
    id: 1,
    name: "ใบรับรองแพทย์",
    imageSrc: "/images/evidence/demo-medical-certificate.svg",
    uploader: "ทนายวิชัย",
  },
  {
    id: 2,
    name: "ใบรับรองแพทย์",
    imageSrc: "/images/evidence/thai-demo-medical-certificate.svg",
    uploader: "คุณปัณณวิชญ์",
  },
  ...Array.from({ length: 40 }, (_, i) => ({
    id: i + 3,
    name: `หลักฐานโรงอาหาร 20 มี.ค. 2568 ${i + 1}`,
    imageSrc: `/images/evidence/LINE_ALBUM_Evidence_250322_${i + 1}.jpg`,
    uploader: users[i % users.length],
  })),
];
