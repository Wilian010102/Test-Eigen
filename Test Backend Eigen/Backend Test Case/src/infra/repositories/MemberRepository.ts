import { Member } from '../../domain/models/Member';

const members: Member[] = [
  new Member("M001", "Angga"),
  new Member("M002", "Ferry"),
  new Member("M003", "Putri")
];

export class MemberRepository {
  findAll(): Member[] {
    return members;
  }

  findByCode(code: string): Member | undefined {
    return members.find(member => member.code === code);
  }

  save(member: Member): void {
    // Save logic here, for now it's just mock data
  }
}
