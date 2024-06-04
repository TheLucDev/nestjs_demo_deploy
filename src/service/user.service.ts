// import { ActiveStatusEnum } from 'src/common/enum/common.enum';
// import { GeneratePasswdClass } from 'src/common/utils';
// import { config } from 'src/config';
// import { hashSync } from 'bcryptjs';
import {
  // CreateUserDto,
  // EditUserDto,
  GetUserDto,
} from 'src/common/dto/user.dto';
import { Injectable, HttpException, HttpStatus, Param } from '@nestjs/common';
import { ErrorConstant } from 'src/common/constant/error.constant';
import { logger } from 'src/logger';
import { UnitOfWork } from 'src/provider/unitOfWork';
import { TbUser } from 'src/entity/sql/TbUser.entity';

@Injectable()
export class UserService {
  constructor(private readonly uow: UnitOfWork) {}

  async GetUser(model: GetUserDto): Promise<any> {
    let query = this.uow
      .TbUserRepo()
      .getAll()
      .where((u) => u.status)
      .equal(1);

    const { search, limit, page } = model;
    if (search != null) {
      query = query
        .or((x) => x.email)
        .contains(search)
        .or((x) => x.phone)
        .contains(search);
    }

    const total = await query.count();
    const pages = Math.ceil(total / limit);
    const docs: TbUser[] = await query.skip((page - 1) * limit).take(limit);

    // for (let i = 0; i < docs.length; i++) {
    //   const groupInfo = await this.GetDetail(docs[i].id).catch((err) => {
    //     throw err;
    //   });
    // }
    return { docs, total, pages, page };
  }

  async GetDetail(idUser: string): Promise<any> {
    try {
      let _entity: TbUser = await this.uow
        .TbUserRepo()
        .getOne()
        .where((x) => x.idUser)
        .equal(idUser)
        .catch((e) => {
          throw e;
        });

      if (!_entity)
        throw new HttpException(
          ErrorConstant.USER_NOT_FOUND,
          HttpStatus.CONFLICT,
        );

      // let _userGroups: SysUserGroups[] = await this.uow
      //   .SysUserGroupsRepo()
      //   .getAll()
      //   .and((x) => x.user_id)
      //   .equal(id)
      //   .include((x) => x.sysGroups)
      //   .catch((e) => {
      //     throw e;
      //   });

      // const userGroupIds = _userGroups.map((x) => x.group_id);
      // console.log(userGroupIds, 'userGroupIds');

      // let _groupName: SysGroups[] = await this.uow
      //   .SysGroupsRepo()
      //   .getAll()
      //   .and((u) => u.id)
      //   .equal(x.id)
      //   .catch((e) => {
      //     throw e;
      //   });
      // return _groupName;
      return {
        _entity,
        // user_groups: _userGroups.map((x) => x.sysGroups.name),
      };
    } catch (error) {
      logger.error(error);
      throw error;
    }
  }

  // async EditUserGroup(id: string, body: EditUserDto): Promise<any> {
  //   const { name: name, groupIds: groupsIds } = body;
  //   try {
  //     let _entity = await this.uow
  //       .TbUserRepo()
  //       .getOne()
  //       .where((x) => x.id)
  //       .equal(id, { matchCase: true })
  //       .catch((e) => {
  //         throw e;
  //       });
  //     if (!_entity)
  //       throw new HttpException(
  //         ErrorConstant.USER_NOT_FOUND,
  //         HttpStatus.CONFLICT,
  //       );

  //     _entity.full_name = body.name;
  //     await this.uow.TbUserRepo().update(_entity);

  //     let _userGroup = await this.uow
  //       .SysUserGroupsRepo()
  //       .getAll()
  //       .where((x) => x.user_id)
  //       .equal(id, { matchCase: true })
  //       .catch((e) => {
  //         throw e;
  //       });
  //     let newUserArr = [];
  //     if (!_userGroup || _userGroup.length === 0) {
  //       for (let i = 0; i < groupsIds.length; i++) {
  //         let newUser = new SysUserGroups();
  //         newUser.user_id = id;
  //         newUser.group_id = groupsIds[i];
  //         await this.uow.SysUserGroupsRepo().create(newUser);
  //       }
  //     } else {
  //       this.uow.SysUserGroupsRepo().delete(_userGroup);
  //       for (let i = 0; i < groupsIds.length; i++) {
  //         let newUser = new SysUserGroups();
  //         newUser.user_id = id;
  //         newUser.group_id = body.groupIds[i];
  //         newUserArr.push(newUser);
  //       }
  //       await this.uow.SysUserGroupsRepo().create(newUserArr);
  //     }
  //     return true;
  //   } catch (error) {
  //     logger.error(error);
  //     throw error;
  //   }
  // }

  // async CreateUser(model: CreateUserDto): Promise<any> {
  //   const { email } = model;
  //   try {
  //     let _entity: SysUsers = await this.uow
  //       .TbUserRepo()
  //       .getOne()
  //       .where((x) => x.email)
  //       .equal(email)
  //       .catch((e) => {
  //         throw e;
  //       });
  //     if (_entity)
  //       throw new HttpException(
  //         ErrorConstant.USER_ALREADY_EXIST,
  //         HttpStatus.CONFLICT,
  //       );

  //     let newUser = new SysUsers();

  //     newUser.email = email;
  //     newUser.full_name = model.name;
  //     newUser.active = ActiveStatusEnum.Active;
  //     const genPassClass = new GeneratePasswdClass();
  //     const genPass = genPassClass.GeneratePassword();
  //     const newPass = hashSync(
  //       genPassClass.GeneratePassword(),
  //       Number(config.AUTH.SALT_ROUND),
  //     );
  //     newUser.password = newPass;

  //     await this.uow
  //       .TbUserRepo()
  //       .create(newUser)
  //       .catch((e) => {
  //         throw e;
  //       });
  //     logger.debug(`user created success: ${JSON.stringify(email)}`);

  //     return { genPass: genPass };
  //   } catch (error) {
  //     logger.error(error);
  //     throw error;
  //   }
  // }

  // async CreateUserGroups(id: string, groupIds: any): Promise<any> {
  //   try {
  //     // let _entity: SysUsers = await this.uow
  //     //   .TbUserRepo()
  //     //   .getOne()
  //     //   .where((x) => x.email)
  //     //   .equal(email)
  //     //   .catch((e) => {
  //     //     throw e;
  //     //   });
  //     // if (_entity)
  //     //   throw new HttpException(
  //     //     ErrorConstant.USER_ALREADY_EXIST,
  //     //     HttpStatus.CONFLICT,
  //     //   );

  //     let newUser = new SysUsers();

  //     // newUser.email = email;
  //     // newUser.full_name = model.name;
  //     // newUser.active = ActiveStatusEnum.Active;
  //     // const genPassClass = new GeneratePasswdClass();
  //     // const genPass = genPassClass.GeneratePassword();
  //     // const newPass = hashSync(
  //     //   genPassClass.GeneratePassword(),
  //     //   Number(config.AUTH.SALT_ROUND),
  //     // );
  //     // newUser.password = newPass;

  //     // await this.uow
  //     //   .TbUserRepo()
  //     //   .create(newUser)
  //     //   .catch((e) => {
  //     //     throw e;
  //     //   });
  //     // logger.debug(`user created success: ${JSON.stringify(email)}`);

  //     // return { genPass: genPass };
  //   } catch (error) {
  //     logger.error(error);
  //     throw error;
  //   }
  // }
}
