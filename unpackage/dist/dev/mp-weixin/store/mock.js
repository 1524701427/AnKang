"use strict";
const reminders = [
  { id: 1, time: "08:00", type: "medicine", title: "降压药", dosage: "1片", repeat: "每天", notifyAfter: 30, enabled: true },
  { id: 2, time: "11:30", type: "meal", title: "记得吃午饭", dosage: "清淡饮食", repeat: "每天", notifyAfter: 0, enabled: true },
  { id: 3, time: "20:00", type: "medicine", title: "阿托伐他汀", dosage: "1片", repeat: "每天", notifyAfter: 30, enabled: true }
];
const familyMembers = [
  { id: 1, name: "小敏", relation: "女儿", phone: "138****1234", role: "主要照护人" },
  { id: 2, name: "小强", relation: "儿子", phone: "139****8866", role: "家庭成员" }
];
const careTasks = [
  { id: 1, title: "购买降压药", owner: "小敏", due: "还剩5天", status: "进行中" },
  { id: 2, title: "周五陪同复诊", owner: "小强", due: "周五 09:30", status: "待完成" }
];
exports.careTasks = careTasks;
exports.familyMembers = familyMembers;
exports.reminders = reminders;
//# sourceMappingURL=../../.sourcemap/mp-weixin/store/mock.js.map
