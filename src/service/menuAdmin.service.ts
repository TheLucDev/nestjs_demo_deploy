import { Injectable } from '@nestjs/common';
import { GetMenuAdminDto } from 'src/common/dto/menuAdmin.dto';
import { UnitOfWork } from 'src/provider/unitOfWork';
import { TbMenuAdmin } from 'src/entity/sql/TbMenuAdmin.entity';
import { transformInputToMenu } from 'src/utils/common.utils';

@Injectable()
export class MenuAdminServices {
  constructor(private readonly uow: UnitOfWork) {}

  async GetMenuAdmin(): Promise<any> {
    let query = this.uow.TbMenuAdminRepo().getAll();

    const total = await query.count();
    const docs: TbMenuAdmin[] = await query;

    const menuList = transformInputToMenu(docs);
    return { menuList, total };
  }
}
