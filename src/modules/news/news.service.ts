import { Injectable } from '@nestjs/common';
import { DataSnapshot, get, push, ref, set } from 'firebase/database';
import { firebaseDataBase } from '../firebase.config';
import { CreateNews } from './news.dto';

@Injectable()
export class NewsService {
  async createData(data: CreateNews) {
    const dataRef = ref(firebaseDataBase, 'News');
    const newElementRef = push(dataRef, { dataRef: data });
    await set(newElementRef, data);
    return {
      statusCode: 200,
      message: 'Create news successfully',
    };
  }

  async getData(page: number, limit: number) {
    const dataRef = ref(firebaseDataBase, 'News');
    const snapShot: DataSnapshot = await get(dataRef);
    if (snapShot.exists()) {
      const allChildren: any[] = [];
      snapShot.forEach((childSnapshot) => {
        const childData = childSnapshot.val();
        allChildren.push(childData);
      });
      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;

      // Slice the array to get only the items for the current page
      const paginatedChildren = allChildren.slice(startIndex, endIndex);

      return {
        statusCode: 200,
        message: 'Get all news successfully',
        data: paginatedChildren,
      };
    } else {
      console.log('No data available');
      return null;
    }
  }

  async createDataList(dataList: CreateNews[]) {
    const dataRef = ref(firebaseDataBase, 'News');

    // Lặp qua từng phần tử trong danh sách và thêm vào Firebase
    for (const data of dataList) {
      const newElementRef = push(dataRef);
      await set(newElementRef, data);
    }

    return {
      statusCode: 200,
      message: 'Created news list successfully',
    };
  }

  async search(keyword: String) {
    const newKeyword = keyword.toLowerCase();
    const dataRef = ref(firebaseDataBase, 'News');
    const snapShot: DataSnapshot = await get(dataRef);
    if (snapShot.exists()) {
      const children: any[] = [];
      snapShot.forEach((childSnapshot) => {
        const childData = childSnapshot.val();
        if (
          childData.title?.toLowerCase().includes(newKeyword) ||
          childData.description?.toLowerCase().includes(newKeyword) ||
          childData.sourceName?.toLowerCase().includes(newKeyword) ||
          childData.content?.toLowerCase().includes(newKeyword) ||
          childData.author?.toLowerCase().includes(newKeyword)
        ) {
          children.push(childData);
        }
      });
      return {
        statusCode: 200,
        message: 'Get all news successfully',
        data: children,
      };
    } else {
      return null;
    }
  }
}
