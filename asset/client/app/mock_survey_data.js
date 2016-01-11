var mockSurveyData = {
  id: 435,
  title: "很随意的一份调查问卷",
  description: "这是一些测试数据...",
  createdAt: new Date(),
  updatedAt: new Date(),
  items: [{
    "id": 35,
    "type": "yes_no",
    "meta": {
      "label": "你觉得这件事这样做对吗?"
    }
  }, {
    "id": 36,
    "type": "yes_no",
    "meta": {
      "label": "西红柿炒蛋是一定得先下蛋才行?"
    }
  }, {
    "id": 37,
    "type": "multiple_choice",
    "meta": {
      "label": "你最常用的开发工具",
      "choices": [
        "Idea",
        "Sublime",
        "VScode"
      ]
    }
  }, {
    "id": 38,
    "type": "essay",
    "meta": {
      "label": "简述你的这份问卷的看法?"
    }
  }]
};

module.exports = mockSurveyData;
