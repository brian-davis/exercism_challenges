module Brackets
  LEFT  = "[{("
  RIGHT = "]})"

  def self.paired?(str)
    str.each_char.with_object([]) do |c, acc|
      if LEFT.include?(c)
        acc.push(c)
      elsif RIGHT.include?(c)
        return false unless acc.pop == c.tr(RIGHT, LEFT)
      end
    end.empty?
  end
end

module BookKeeping
  VERSION = 4
end
