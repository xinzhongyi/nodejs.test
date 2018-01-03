var path = require("path");

// ��ʽ��·��
console.log('normalization : ' + path.normalize('/test/test1//2slashes/1slash/tab/..'));

// ����·��
console.log('joint path : ' + path.join('/test', 'test1', '2slashes/1slash', 'tab', '..'));

// ת��Ϊ����·��
console.log('resolve : ' + path.resolve('main.js'));

// ·�����ļ��ĺ�׺��
console.log('ext name : ' + path.extname('main.js'));