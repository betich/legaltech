export interface GroupCase {
  id: number;
  title: string;
  requirements: string[];
  currentMembers: number;
  status: string;
}

export const caseData: GroupCase[] = [
  {
    id: 1,
    title: "ผู้ได้รับผลกระทบจากมลพิษทางอากาศ",
    requirements: [
      "อาศัยในพื้นที่รัศมี 5 กม. จากโรงงาน",
      "มีอาการทางระบบหายใจในช่วง 2 ปีที่ผ่านมา",
      "มีหลักฐานทางการแพทย์",
    ],
    currentMembers: 156,
    status: "กำลังรวบรวม",
  },
  {
    id: 2,
    title: "ผู้เสียหายจากการละเมิดข้อมูลส่วนบุคคล",
    requirements: [
      "เป็นลูกค้าของบริษัท X ในช่วงปี 2566",
      "พบการใช้ข้อมูลโดยไม่ได้รับอนุญาต",
      "มีหลักฐานความเสียหาย",
    ],
    currentMembers: 892,
    status: "เปิดรับสมาชิก",
  },
  {
    id: 3,
    title: "ผู้ได้รับผลกระทบจากน้ำท่วมฉับพลัน",
    requirements: [
      "ที่อยู่อาศัยได้รับความเสียหายในปี 2566",
      "มีหลักฐานการซ่อมแซมหรือค่าใช้จ่าย",
      "อาศัยในพื้นที่เสี่ยงภัยน้ำท่วมซ้ำซาก",
    ],
    currentMembers: 320,
    status: "กำลังรวบรวม",
  },
  {
    id: 4,
    title: "ผู้ได้รับผลกระทบจากผลิตภัณฑ์อันตราย",
    requirements: [
      "ใช้ผลิตภัณฑ์ Y ในช่วงปี 2565-2566",
      "พบปัญหาสุขภาพหลังการใช้",
      "มีรายงานแพทย์ยืนยันผลกระทบ",
    ],
    currentMembers: 187,
    status: "เปิดรับสมาชิก",
  },
  {
    id: 5,
    title: "ผู้เสียหายจากการหลอกลวงทางการเงิน",
    requirements: [
      "ถูกหลอกให้ลงทุนในแพลตฟอร์ม Z",
      "สูญเสียเงินเกิน 50,000 บาท",
      "มีหลักฐานการทำธุรกรรม",
    ],
    currentMembers: 542,
    status: "กำลังรวบรวม",
  },
  {
    id: 6,
    title: "ผู้ได้รับผลกระทบจากค่ารักษาพยาบาลไม่เป็นธรรม",
    requirements: [
      "ได้รับการเรียกเก็บค่ารักษาเกินจริง",
      "มีหลักฐานค่าใช้จ่ายจากโรงพยาบาล",
      "ได้รับผลกระทบทางการเงิน",
    ],
    currentMembers: 214,
    status: "เปิดรับสมาชิก",
  },
  {
    id: 7,
    title: "ผู้เสียหายจากการซื้อขายอสังหาริมทรัพย์ไม่โปร่งใส",
    requirements: [
      "ทำสัญญาซื้อขายอสังหาริมทรัพย์ที่มีปัญหา",
      "ถูกเรียกเก็บค่าธรรมเนียมแฝง",
      "มีหลักฐานสัญญาการซื้อขาย",
    ],
    currentMembers: 376,
    status: "กำลังรวบรวม",
  },
  {
    id: 8,
    title: "ผู้ได้รับผลกระทบจากการเลิกจ้างไม่เป็นธรรม",
    requirements: [
      "ถูกเลิกจ้างโดยไม่มีเหตุผลอันสมควร",
      "ไม่ได้รับค่าชดเชยตามกฎหมาย",
      "มีหลักฐานสัญญาจ้างงาน",
    ],
    currentMembers: 451,
    status: "เปิดรับสมาชิก",
  },
  {
    id: 9,
    title: "ผู้เสียหายจากอุบัติเหตุรถโดยสารสาธารณะ",
    requirements: [
      "เป็นผู้โดยสารที่ได้รับบาดเจ็บจากอุบัติเหตุ",
      "มีใบรับรองแพทย์ยืนยันการบาดเจ็บ",
      "มีหลักฐานการใช้บริการรถโดยสาร",
    ],
    currentMembers: 233,
    status: "กำลังรวบรวม",
  },
  {
    id: 10,
    title: "ผู้ได้รับผลกระทบจากสินค้าชำรุด",
    requirements: [
      "ซื้อสินค้าภายใน 1 ปีที่ผ่านมา",
      "สินค้าชำรุดหรือก่อให้เกิดอันตราย",
      "มีใบเสร็จหรือหลักฐานการซื้อขาย",
    ],
    currentMembers: 119,
    status: "เปิดรับสมาชิก",
  },
  // เพิ่มกรณีเพิ่มเติมให้ครบ 25 รายการ...
];
