import { DinnyCalculator } from "@/features/agent-traning-calculator/dinny-calculator";
import { expect, jest, test, describe } from "@jest/globals";

describe("エージェント育成に必要なディニーの金額を計算できる", () => {
  test.each`
    level | coreSkillLevel | containBreakThrough | expected
    ${0}  | ${""}          | ${true}             | ${"0"}
    ${0}  | ${""}          | ${false}            | ${"0"}
    ${0}  | ${""}          | ${false}            | ${"0"}
  `(
    "エージェントのレベルを0で指定した場合、ディニーはかからない",
    ({ level, coreSkillLevel, containBreakThrough, expected }) => {
      const sut = new DinnyCalculator();

      const actual = sut.calculate(level, coreSkillLevel, containBreakThrough);
      expect(actual).toBe(expected);
    }
  );

  test.each`
    level | coreSkillLevel | containBreakThrough | expected
    ${0}  | ${"A"}         | ${false}            | ${"5,000"}
    ${0}  | ${"B"}         | ${true}             | ${"17,000"}
    ${0}  | ${"C"}         | ${false}            | ${"45,000"}
    ${0}  | ${"D"}         | ${true}             | ${"105,000"}
    ${0}  | ${"E"}         | ${false}            | ${"205,000"}
    ${0}  | ${"F"}         | ${true}             | ${"405,000"}
  `(
    "エージェントのレベルを0で指定した場合でもコアスキルレベルを指定している場合、コアスキルレベル分のディニーがかかる",
    ({ level, coreSkillLevel, containBreakThrough, expected }) => {
      const sut = new DinnyCalculator();

      const actual = sut.calculate(level, coreSkillLevel, containBreakThrough);
      expect(actual).toBe(expected);
    }
  );

  test.each`
    level | coreSkillLevel | containBreakThrough | expected
    ${10} | ${""}          | ${false}            | ${"0"}
    ${20} | ${""}          | ${false}            | ${"24,000"}
    ${30} | ${""}          | ${false}            | ${"80,000"}
    ${40} | ${""}          | ${false}            | ${"200,000"}
    ${50} | ${""}          | ${false}            | ${"400,000"}
    ${60} | ${""}          | ${false}            | ${"800,000"}
  `(
    "エージェントのレベルを0以外で指定した場合で、コアスキルレベルを指定しない、突破しない場合は、レベルに応じたディニーのみかかる",
    ({ level, coreSkillLevel, containBreakThrough, expected }) => {
      const sut = new DinnyCalculator();

      const actual = sut.calculate(level, coreSkillLevel, containBreakThrough);
      expect(actual).toBe(expected);
    }
  );

  test.each`
    level | coreSkillLevel | containBreakThrough | expected
    ${10} | ${""}          | ${true}             | ${"24,000"}
    ${20} | ${""}          | ${true}             | ${"80,000"}
    ${30} | ${""}          | ${true}             | ${"200,000"}
    ${40} | ${""}          | ${true}             | ${"400,000"}
    ${50} | ${""}          | ${true}             | ${"800,000"}
    ${60} | ${""}          | ${true}             | ${"800,000"}
  `(
    "エージェントのレベルを0以外で指定した場合で、コアスキルレベルを指定しない、突破する場合は、レベルに応じたディニーに加えて突破分のディニーがかかる",
    ({ level, coreSkillLevel, containBreakThrough, expected }) => {
      const sut = new DinnyCalculator();

      // レベル60を指定している場合、突破できないので本来はあり得ないケースが含まれている
      const actual = sut.calculate(level, coreSkillLevel, containBreakThrough);
      expect(actual).toBe(expected);
    }
  );

  test.each`
    level | coreSkillLevel | containBreakThrough | expected
    ${0}  | ${"A"}         | ${true}             | ${"5,000"}
    ${10} | ${"A"}         | ${true}             | ${"29,000"}
    ${20} | ${"A"}         | ${true}             | ${"85,000"}
    ${30} | ${"A"}         | ${true}             | ${"205,000"}
    ${40} | ${"A"}         | ${true}             | ${"405,000"}
    ${50} | ${"A"}         | ${true}             | ${"805,000"}
    ${60} | ${"A"}         | ${true}             | ${"805,000"}
    ${0}  | ${"B"}         | ${true}             | ${"17,000"}
    ${10} | ${"B"}         | ${true}             | ${"41,000"}
    ${20} | ${"B"}         | ${true}             | ${"97,000"}
    ${30} | ${"B"}         | ${true}             | ${"217,000"}
    ${40} | ${"B"}         | ${true}             | ${"417,000"}
    ${50} | ${"B"}         | ${true}             | ${"817,000"}
    ${60} | ${"B"}         | ${true}             | ${"817,000"}
    ${0}  | ${"C"}         | ${true}             | ${"45,000"}
    ${10} | ${"C"}         | ${true}             | ${"69,000"}
    ${20} | ${"C"}         | ${true}             | ${"125,000"}
    ${30} | ${"C"}         | ${true}             | ${"245,000"}
    ${40} | ${"C"}         | ${true}             | ${"445,000"}
    ${50} | ${"C"}         | ${true}             | ${"845,000"}
    ${60} | ${"C"}         | ${true}             | ${"845,000"}
    ${0}  | ${"D"}         | ${true}             | ${"105,000"}
    ${10} | ${"D"}         | ${true}             | ${"129,000"}
    ${20} | ${"D"}         | ${true}             | ${"185,000"}
    ${30} | ${"D"}         | ${true}             | ${"305,000"}
    ${40} | ${"D"}         | ${true}             | ${"505,000"}
    ${50} | ${"D"}         | ${true}             | ${"905,000"}
    ${60} | ${"D"}         | ${true}             | ${"905,000"}
    ${0}  | ${"E"}         | ${true}             | ${"205,000"}
    ${10} | ${"E"}         | ${true}             | ${"229,000"}
    ${20} | ${"E"}         | ${true}             | ${"285,000"}
    ${30} | ${"E"}         | ${true}             | ${"405,000"}
    ${40} | ${"E"}         | ${true}             | ${"605,000"}
    ${50} | ${"E"}         | ${true}             | ${"1,005,000"}
    ${60} | ${"E"}         | ${true}             | ${"1,005,000"}
    ${0}  | ${"F"}         | ${true}             | ${"405,000"}
    ${10} | ${"F"}         | ${true}             | ${"429,000"}
    ${20} | ${"F"}         | ${true}             | ${"485,000"}
    ${30} | ${"F"}         | ${true}             | ${"605,000"}
    ${40} | ${"F"}         | ${true}             | ${"805,000"}
    ${50} | ${"F"}         | ${true}             | ${"1,205,000"}
    ${60} | ${"F"}         | ${true}             | ${"1,205,000"}
  `(
    "エージェントのレベルを0以外で指定した場合で、コアスキルレベルを指定する、突破する場合は、コアスキルレベルを上げるために必要なディニーに加え、レベルに応じたディニー、突破分のディニーがかかる",
    ({ level, coreSkillLevel, containBreakThrough, expected }) => {
      const sut = new DinnyCalculator();

      // レベル60を指定している場合、突破できないので本来はあり得ないケースが含まれている
      const actual = sut.calculate(level, coreSkillLevel, containBreakThrough);
      expect(actual).toBe(expected);
    }
  );
});
