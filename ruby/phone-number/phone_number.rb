class PhoneNumber
  attr_reader :number

  def initialize num_str
    @number = process num_str
  end

  def area_code
    number[0..2]
  end

  def process num_str
    num_str.gsub! /[\.()\-\s]/, ''
    if num_str.length == 10 && !num_str[/[a-zA-Z]/]
      num_str
    elsif num_str.length == 11 && num_str[0] == '1'
      num_str[1..-1]
    else
      '0000000000'
    end
  end

  def to_s
    "(#{area_code}) #{number[3..5]}-#{number[6..9]}"
  end
end
