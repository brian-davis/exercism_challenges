require 'minitest/autorun'
require_relative 'year'

class YearTest < MiniTest::Unit::TestCase
  def test_leap_year
    assert Year.leap?(1996)
  end

  def test_non_leap_year
    refute Year.leap?(1997)
  end

  def test_non_leap_even_year
    refute Year.leap?(1998)
  end

  def test_century
    refute Year.leap?(1900)
  end

  def test_fourth_century
    assert Year.leap?(2400)
  end
end
